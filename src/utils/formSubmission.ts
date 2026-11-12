export type SubmissionFormType = 'contact' | 'career';

export interface FormSubmissionResult {
  ok: boolean;
  error?: string;
  timedOut?: boolean;
}

const SUBMISSION_TIMEOUT_MS = 25000;

/**
 * Submits form payloads to the configured Google Apps Script Web App.
 * Sends JSON with `text/plain;charset=utf-8` so browsers treat the POST as a
 * simple request and skip the CORS preflight that Apps Script rejects.
 */
export async function submitToGoogleScript<T extends Record<string, unknown>>(
  formType: SubmissionFormType,
  payload: T
): Promise<FormSubmissionResult> {
  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();

  if (!scriptUrl) {
    // Fallback simulation when running locally without a configured endpoint
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { ok: true };
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), SUBMISSION_TIMEOUT_MS);

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ formType, ...payload })
    });

    const rawText = await response.text();

    if (!response.ok) {
      console.error('[FormSubmission] Non-OK response:', response.status, rawText.slice(0, 300));
      return { ok: false, error: `HTTP ${response.status}` };
    }

    let data: Record<string, unknown> | null = null;
    if (rawText) {
      try {
        data = JSON.parse(rawText) as Record<string, unknown>;
      } catch {
        console.error('[FormSubmission] Non-JSON response body:', rawText.slice(0, 300));
      }
    }

    if (data && (data.status === 'success' || data.result === 'success' || data.ok === true)) {
      return { ok: true };
    }

    const message =
      (data && typeof data.message === 'string' && data.message) || 'Submission failed';
    console.error('[FormSubmission] Unexpected response payload:', data ?? rawText.slice(0, 300));
    return { ok: false, error: message };
  } catch (err) {
    const isAbort =
      (err instanceof Error && err.name === 'AbortError') ||
      (typeof DOMException !== 'undefined' &&
        err instanceof DOMException &&
        err.name === 'AbortError');

    if (isAbort) {
      console.error(`[FormSubmission] Request timed out after ${SUBMISSION_TIMEOUT_MS}ms`);
      return {
        ok: false,
        timedOut: true,
        error: 'Submission confirmation timed out. Your details may have been received — please contact us directly to confirm.'
      };
    }

    console.error('[FormSubmission] Network/CORS error:', err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'Network error'
    };
  } finally {
    window.clearTimeout(timeoutId);
  }
}

