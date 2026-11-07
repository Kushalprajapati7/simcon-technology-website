import React, { useState } from 'react';
import { FlaskConical, CheckCircle2, X } from 'lucide-react';

interface MatrixCard {
  id: string;
  name: string;
  image: string;
  accentColor: 'blue' | 'red';
  description: string;
  keyTests: string[];
}

const MATRICES: MatrixCard[] = [
  {
    id: 'cement',
    name: 'Cement & Cementitious Materials',
    image: '/assets/services/materials/matrices/cement.png',
    accentColor: 'blue',
    description: 'OPC, PPC, PSC, fly ash, micro silica & ground granulated blast furnace slag (GGBS).',
    keyTests: ['Loss on Ignition (LOI)', 'Insoluble Residue (IR)', 'Major Oxides (SiO₂, Al₂O₃, CaO, MgO, Fe₂O₃)', 'Free Lime', 'Chloride & Sulphate content']
  },
  {
    id: 'aggregates',
    name: 'Aggregates & Concrete',
    image: '/assets/services/materials/matrices/aggregates.png',
    accentColor: 'red',
    description: 'Fine & coarse mineral aggregates, manufactured sand (M-Sand), and hardened concrete.',
    keyTests: ['Alkali–Aggregate Reactivity (AAR / Mortar Bar)', 'Water Soluble Chloride & Sulphate', 'pH value', 'Soundness & Organic Impurities']
  },
  {
    id: 'admixtures',
    name: 'Admixtures',
    image: '/assets/services/materials/matrices/admixtures.png',
    accentColor: 'blue',
    description: 'Chemical plasticizers, superplasticizers, retarders, accelerators, and waterproofing admixtures.',
    keyTests: ['pH Value', 'Dry Material Content', 'Ash Content', 'Relative Density', 'Chloride Ion Content']
  },
  {
    id: 'soil',
    name: 'Soil, Bentonite & Polymer',
    image: '/assets/services/materials/matrices/soil.png',
    accentColor: 'red',
    description: 'Subsurface soil strata, drilling bentonite slurry, piling polymers, and coastal muds.',
    keyTests: ['pH Determination', 'Organic Matter Content', 'Water Soluble Sulphates & Chlorides', 'Total Soluble Solids', 'Carbonate Content']
  },
  {
    id: 'water',
    name: 'Construction Water & Drinking Water',
    image: '/assets/services/materials/matrices/water.png',
    accentColor: 'blue',
    description: 'Mixing and curing water for RCC construction, groundwater, borewell and potable water.',
    keyTests: ['pH Value', 'Total Dissolved Solids (TDS)', 'Total Suspended Solids (TSS)', 'Total Hardness', 'Chlorides & Sulphates', 'Acidity & Alkalinity']
  },
  {
    id: 'steel',
    name: 'Steel, Metals & Alloys',
    image: '/assets/services/materials/matrices/steel.png',
    accentColor: 'red',
    description: 'TMT reinforcing rebars, structural steel sections, prestressing wire, and galvanized coatings.',
    keyTests: ['Carbon, Sulphur & Phosphorus Composition (C, S, P)', 'Carbon Equivalent (CE)', 'Zinc Coating Mass (IS 4759 / IS 6745)', 'Corrosion Resistance']
  }
];

export const ChemicalTestingShowcase: React.FC = () => {
  const [selectedMatrix, setSelectedMatrix] = useState<MatrixCard | null>(null);

  return (
    <div
      id="chemical-testing"
      className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden"
    >
      {/* 1. TOP HERO / BANNER SECTION */}
      <div className="relative bg-gradient-to-r from-white via-slate-50 to-blue-50/40 border-b border-slate-200 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-12 py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#062B5C] tracking-tight leading-none uppercase">
                Chemical Testing
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              NABL ISO/IEC 17025 accredited analytical wet chemistry, spectrophotometric analysis, and elemental composition testing across 6 civil engineering matrices.
            </p>
          </div>

          {/* Right Banner Laboratory Graphic preview */}
          <div className="relative lg:max-w-md w-full rounded-xl overflow-hidden border border-slate-200/80 shadow-xs bg-white shrink-0 group">
            <img
              src="/assets/services/materials/chemical-testing-banner.png"
              alt="SIMCON Chemical Testing Laboratory"
              className="w-full h-36 sm:h-44 object-cover object-right group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-3">
              <span className="text-[11px] font-mono text-white font-medium flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5 text-cyan-300" />
                Analytical Laboratory Setup
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MATERIALS / MATRICES COVERED (6 Cards Row) */}
      <div className="px-6 sm:px-10 lg:px-12 py-8 bg-[#FBFBFC] border-b border-slate-200">
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-[#062B5C] uppercase whitespace-nowrap">
            MATERIALS / MATRICES COVERED
          </h3>
          <div className="h-0.5 flex-1 bg-slate-300" />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {MATRICES.map((mat) => (
            <div
              key={mat.id}
              onClick={() => setSelectedMatrix(mat)}
              className="cursor-pointer bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Image with 16:9 ratio */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={mat.image}
                  alt={mat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Card Label */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <h4 className="text-[11px] sm:text-xs font-bold font-display text-[#062B5C] leading-snug group-hover:text-[#1268B3] transition-colors">
                  {mat.name}
                </h4>

                {/* Accent Color Line (verbatim from brochure reference image) */}
                <div className="mt-2.5 pt-1">
                  <div
                    className={`h-0.5 w-7 rounded-full transition-all ${
                      mat.accentColor === 'red' ? 'bg-[#D71920]' : 'bg-[#1268B3]'
                    } group-hover:w-full`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CHEMICAL PARAMETERS SECTION (Centered Blue Bold Verbatim from Image) */}
      <div className="px-6 sm:px-10 lg:px-12 py-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold block">
            17 ACCREDITED CHEMICAL TESTING PARAMETERS
          </span>

          <div className="space-y-2 text-[#0A3B7E] font-bold text-xs sm:text-[13px] md:text-sm lg:text-[15px] leading-relaxed">
            <p>
              pH • Chloride • Sulphate / SO₃ • Alkali Content • Loss on Ignition • Insoluble Residue • Free Lime • Moisture Content
            </p>
            <p>
              Major Oxides (SiO₂, Al₂O₃, CaO, MgO, Fe₂O₃) • Organic Matter • Alkali–Aggregate Reactivity • Acidity / Alkalinity • TDS / TSS
            </p>
            <p>
              Total Hardness • Fixed &amp; Volatile Residue • Steel / Alloy Composition • Zinc Coating Mass
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] font-mono text-slate-500">Governing Standards:</span>
            {['IS 4032 (Cement)', 'IS 2720 (Soil)', 'IS 3025 (Water)', 'IS 228 / IS 1786 (Steel)', 'IS 383 (Aggregates)', 'ASTM C114'].map((std, sIdx) => (
              <span
                key={sIdx}
                className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-medium border border-slate-200"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL: Matrix Detail Popup */}
      {selectedMatrix && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in duration-150">
            <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
              <img
                src={selectedMatrix.image}
                alt={selectedMatrix.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedMatrix(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#062B5C] text-white">
                  Matrix Category
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1 drop-shadow-sm">
                  {selectedMatrix.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedMatrix.description}
              </p>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-2">
                  Key Chemical Parameters Tested:
                </span>
                <ul className="space-y-1.5">
                  {selectedMatrix.keyTests.map((test, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">NABL ISO/IEC 17025 Accredited</span>
                <button
                  type="button"
                  onClick={() => setSelectedMatrix(null)}
                  className="px-4 py-2 bg-[#062B5C] text-white text-xs font-medium rounded-lg hover:bg-[#1268B3] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
