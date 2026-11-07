import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

export interface SelectedTestModalData {
  name: string;
  category: string;
  code: string;
  image: string;
  description: string;
}

// Master dictionary mapping all testing procedures to authentic workspace images & standard codes
export const TEST_METADATA_REGISTRY: Record<string, { image: string; code: string; description: string }> = {
  // Soil Laboratory Tests
  "Grain Size Analysis – Sieve & Hydrometer Analysis": {
    image: "/assets/services/soil-testing/grain-size-sieve-analysis.png",
    code: "IS 2720 (Part 4) / ASTM D422",
    description: "Determines particle-size distribution curves using mechanical sieves and hydrometer sedimentation for complete grain classification."
  },
  "Grain Size Analysis – Sieve & Hydrometer": {
    image: "/assets/services/soil-testing/grain-size-sieve-analysis.png",
    code: "IS 2720 (Part 4) / ASTM D422",
    description: "Determines particle-size distribution curves using mechanical sieves and hydrometer sedimentation for complete grain classification."
  },
  "Atterberg’s Limit Test": {
    image: "/assets/services/soil-testing/grain-size-sieve-analysis.png",
    code: "IS 2720 (Part 5) / ASTM D4318",
    description: "Evaluates liquid limit, plastic limit, and plasticity index for soil classification and swell potential identification."
  },
  "Atterberg Limits Test": {
    image: "/assets/services/soil-testing/grain-size-sieve-analysis.png",
    code: "IS 2720 (Part 5) / ASTM D4318",
    description: "Evaluates liquid limit, plastic limit, and plasticity index for soil classification and swell potential identification."
  },
  "Specific Gravity Test": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 3) / ASTM D854",
    description: "Pycnometer and density bottle method determining ratio of unit weight of soil solids to distilled water."
  },
  "Relative Density Test": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 14) / ASTM D4253",
    description: "Assesses density index of cohesionless free-draining granular soils for compaction quality control."
  },
  "Free Swell Index": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 40)",
    description: "Volumetric expansion measurement of dry soil poured into graduated cylinder with kerosene and distilled water."
  },
  "Swelling Pressure Test": {
    image: "/assets/services/soil-testing/consolidation-test-apparatus.png",
    code: "IS 2720 (Part 41) / ASTM D4546",
    description: "Measures pressure exerted by expansive soil specimen restrained from swelling during inundation."
  },
  "Compaction Test – Standard & Modified Proctor": {
    image: "/assets/services/soil-testing/soil-compaction-proctor.png",
    code: "IS 2720 (Parts 7 & 8) / ASTM D698 & D1557",
    description: "Establishes relationship between moisture content and dry density to determine optimum moisture content (OMC) and maximum dry density (MDD)."
  },
  "Laboratory CBR Test – Soaked & Unsoaked": {
    image: "/assets/services/soil-testing/soil-compaction-proctor.png",
    code: "IS 2720 (Part 16) / ASTM D1883",
    description: "Load-penetration resistance of compacted soil specimens under 4-day soaked and unsoaked conditions for pavement design."
  },
  "Permeability Test": {
    image: "/assets/services/soil-testing/permeability-lab-test.png",
    code: "IS 2720 (Part 17) / ASTM D2434",
    description: "Constant and falling head coefficient of permeability (k) measurement for seepage and groundwater flow modeling."
  },
  "Digital Direct Shear Test": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 13) / ASTM D3080",
    description: "Determines consolidated drained shear strength parameters (cohesion c and internal friction angle phi)."
  },
  "Direct Shear Test": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 13) / ASTM D3080",
    description: "Determines consolidated drained shear strength parameters (cohesion c and internal friction angle phi)."
  },
  "Laboratory Vane Shear Test": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 30) / ASTM D4648",
    description: "Rapid measurement of undrained shear strength in highly soft cohesive soils and sensitive clays."
  },
  "Unconfined Compressive Strength (UCS) Test": {
    image: "/assets/services/rock-testing/ucs-uniaxial-compressive-rock.png",
    code: "IS 2720 (Part 10) / ASTM D2166",
    description: "Axial compressive failure load on cohesive cylinder without lateral confinement to deduce undrained shear strength."
  },
  "Automatic Triaxial Compression Test – UU, CU & CD": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Parts 11 & 12) / ASTM D2850 & D4767",
    description: "Automated digital triaxial testing under UU, CU with pore water pressure (B-check), and CD conditions."
  },
  "Digital Consolidation Test": {
    image: "/assets/services/soil-testing/consolidation-test-apparatus.png",
    code: "IS 2720 (Part 15) / ASTM D2435",
    description: "Measures 1D consolidation parameters, pre-consolidation pressure, compression index (Cc), and long-term settlement rates."
  },
  "Consolidation Test – Standard & Automated": {
    image: "/assets/services/soil-testing/consolidation-test-apparatus.png",
    code: "IS 2720 (Part 15) / ASTM D2435",
    description: "Measures 1D consolidation parameters, pre-consolidation pressure, compression index (Cc), and long-term settlement rates."
  },

  // Rock Laboratory Tests
  "Petrographic Analysis": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "IS 4144 / ASTM C295",
    description: "Microscopic thin-section evaluation of mineral composition, grain fabric, weathering status, and microfractures."
  },
  "Density Test": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "IS 13030 / ASTM D7012",
    description: "Dry, saturated, and bulk unit weight determination of intact rock core specimens."
  },
  "Porosity Test": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "IS 13030 / ISRM Suggested Method",
    description: "Pore volume ratio measurement directly correlating to rock weathering, permeability, and durable strength."
  },
  "Water Absorption Test": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "IS 13030 / ASTM D7012",
    description: "Percentage weight gain under water saturation, reflecting rock permeability and weathering susceptibility."
  },
  "Slake Durability Index Test": {
    image: "/assets/services/rock-testing/rock-slake-durability-test.png",
    code: "IS 10050 / ASTM D4644",
    description: "Resistance of shales and weathered rocks to weakening and disintegration upon repeated wetting-drying cycles."
  },
  "Cerchar Abrasivity Index Test": {
    image: "/assets/services/rock-testing/point-load-testing-machine.png",
    code: "ASTM D7625 / ISRM",
    description: "Quantifies rock abrasiveness under stylus scratch test for TBM cutter wear and drill bit life estimation."
  },
  "Schmidt Impact Hammer Test": {
    image: "/assets/services/ndt/rebound-hammer-concrete-testing.jpeg",
    code: "IS 13311 (Part 2) / ASTM D5873",
    description: "Non-destructive surface rebound hardness testing for intact rock cores and tunnel wall faces."
  },
  "Point Load Strength Index Test": {
    image: "/assets/services/rock-testing/point-load-testing-machine.png",
    code: "IS 8764 / ASTM D5731",
    description: "Rapid diametral and axial index testing for core classification and empirical conversion to compressive strength."
  },
  "Brazilian Tensile Strength Test": {
    image: "/assets/services/rock-testing/ucs-uniaxial-compressive-rock.png",
    code: "IS 10082 / ASTM D3967",
    description: "Indirect diametral line load tensile strength measurement for tunnel roof and rock mass tensile capacity."
  },
  "Modulus of Elasticity & Poisson’s Ratio for Rock": {
    image: "/assets/services/rock-testing/ucs-uniaxial-compressive-rock.png",
    code: "IS 9221 / ASTM D7012",
    description: "Stress-strain strain gauge instrumentation measuring Young's modulus (E) and Poisson's ratio (v) under uniaxial load."
  },
  "Rock Triaxial Compression Test": {
    image: "/assets/services/rock-testing/rock-triaxial-hoek-cell.png",
    code: "IS 13047 / ASTM D7012",
    description: "Hoek cell high-confining pressure triaxial testing establishing Mohr-Coulomb and Hoek-Brown rock failure envelopes."
  },

  // Advanced Field Tests
  "Static / Dynamic Cone Penetration Test (SCPT/DCPT)": {
    image: "/assets/services/field-testing/scpt-rig-field-operation.png",
    code: "IS 4968 (Parts 1-3) / ASTM D3441",
    description: "Continuous profiling of soil resistance, tip resistance (qc), and sleeve friction (fs) without advance borehole drilling."
  },
  "Standard Penetration Test (SPT)": {
    image: "/assets/services/field-testing/field-dcpt-testing-rig.png",
    code: "IS 2131 / ASTM D1586",
    description: "In-situ borehole penetration resistance (N-value) determination with automatic trip hammer calibration."
  },
  "Modulus of Subgrade Reaction Test (K-Value Test)": {
    image: "/assets/services/field-testing/plate-load-test-setup.png",
    code: "IS 9214 / ASTM D1196",
    description: "Large diameter rigid plate cyclic loading assessing subgrade reaction modulus (k) for rigid airfield and highway slabs."
  },
  "Field CBR Test": {
    image: "/assets/services/field-testing/cone-penetration-probing.png",
    code: "IS 2720 (Part 31) / ASTM D4429",
    description: "In-situ California Bearing Ratio measurement on subgrade, sub-base, and pavement layers for highway design."
  },
  "Field Vane Shear Test": {
    image: "/assets/services/field-testing/field-dcpt-testing-rig.png",
    code: "IS 4434 / ASTM D2573",
    description: "Torque-driven four-bladed vane rotation in soft cohesive clays measuring undisturbed and remoulded peak shear strength."
  },
  "ECPTU – Electrical Cone Penetration Test with Pore Pressure Measurement": {
    image: "/assets/services/field-testing/scpt-rig-field-operation.png",
    code: "ASTM D5778 / ISO 22476-1",
    description: "Piezocone dynamic penetration recording tip resistance (qc), sleeve friction (fs), and dynamic pore pressure (u2)."
  },
  "Field Permeability Test": {
    image: "/assets/services/field-testing/field-testing-1.png",
    code: "IS 5529 (Parts 1 & 2)",
    description: "Borehole pumping-in / pumping-out and Packer water pressure tests in overburden and fractured bedrock."
  },
  "Pressuremeter Test – In-Situ Modulus of Elasticity": {
    image: "/assets/services/field-testing/crosshole-seismic-testing-field.png",
    code: "IS 1892 / ASTM D4719",
    description: "Menard cylindrical expandable probe measurement of in-situ horizontal stress-strain modulus (E) and limit pressure (Pl)."
  },
  "Bi-Directional Load Test": {
    image: "/assets/services/field-testing/pile-load-test-reaction-frame.png",
    code: "ASTM D8169",
    description: "Sacrificial embedded Osterberg-type hydraulic cell loading deep drilled pile shafts from within the rock socket."
  },
  "Static/Cyclic Plate Load Test (PLT)": {
    image: "/assets/services/field-testing/plate-load-test-setup.png",
    code: "IS 1888 / ASTM D1194",
    description: "Static and cyclic plate bearing test for allowable soil bearing capacity and subgrade reaction modulus (k-value)."
  },
  "Static/Cyclic Pile Load Test – Vertical, Pullout & Lateral (SPLT)": {
    image: "/assets/services/field-testing/pile-load-test-reaction-frame.png",
    code: "IS 2911 (Part 4) / ASTM D1143 & D3966",
    description: "Deep foundation compressive, uplift pullout, and lateral thrust validation up to 2500+ tonnes with calibrated hydraulic rams."
  },
  "High Strain Pile Dynamic Test (DPLT)": {
    image: "/assets/services/field-testing/field-testing-10.png",
    code: "ASTM D4945 / IS 14893",
    description: "Drop-weight impact monitoring with strain transducers and accelerometers processed using CAPWAP signal matching."
  },
  "Block Vibration Test (BVT)": {
    image: "/assets/services/field-testing/field-dcpt-testing-rig.png",
    code: "IS 5249",
    description: "Determines dynamic soil properties including coefficient of elastic uniform compression (Cu) for machine foundations."
  },

  // Geophysical Methods
  "Multichannel Analysis of Surface Waves (MASW)": {
    image: "/assets/services/geophysical/masw-seismic-imaging-2d.png",
    code: "ASTM D7400 / IS 1893",
    description: "Rayleigh wave dispersion curve inversion yielding 2D shear-wave velocity (Vs30) profiles for seismic site classification."
  },
  "Seismic Refraction Test (SRT)": {
    image: "/assets/services/geophysical/seismic-refraction-tomography.png",
    code: "ASTM D5777",
    description: "P-wave velocity tomographic profiling determining bedrock depth, rippability, and fault delineation."
  },
  "Crosshole Seismic Test (CHST)": {
    image: "/assets/services/field-testing/crosshole-seismic-testing-field.png",
    code: "ASTM D4428",
    description: "Borehole-to-borehole acoustic pulse transit time recording high-resolution in-situ compression and shear wave speeds."
  },
  "Downhole Seismic Test (DHT)": {
    image: "/assets/services/field-testing/crosshole-seismic-testing-field.png",
    code: "ASTM D7400",
    description: "Surface impulsive shear source with borehole triaxial geophone receiver array measuring vertical velocity profile."
  },
  "Electrical Resistivity Tomography – 2D & 3D ERT Survey": {
    image: "/assets/services/geophysical/masw-seismic-imaging-2d.png",
    code: "ASTM G57 / IS 15681",
    description: "Multi-electrode apparent resistivity inversion mapping lithology, groundwater aquifers, and shear fracture zones."
  },
  "Vertical Electrical Sounding (VES)": {
    image: "/assets/services/geophysical/masw-dispersion-analysis.png",
    code: "IS 15681 / ASTM G57",
    description: "Schlumberger electrode array expanding horizontally to profile 1D vertical electrical resistivity stratification."
  },
  "Ground Penetrating Radar Test (GPR)": {
    image: "/assets/projects/project-highway-bridge-load-test.png",
    code: "ASTM D6432",
    description: "High-frequency electromagnetic reflection imaging buried utility networks, void cavities, and asphalt layer thickness."
  },
  "Thermal Resistivity Test": {
    image: "/assets/services/geophysical/shear-wave-velocity-profile.png",
    code: "IEEE 442 / ASTM D5334",
    description: "Transient needle probe method determining soil thermal conductivity and thermal runaway resistance for underground cables."
  },
  "Borehole Deviation Test": {
    image: "/assets/services/field-testing/field-testing-9.png",
    code: "IS 1892",
    description: "Gyroscopic / magnetic borehole inclinometer profiling vertical alignment, drift, and spatial trajectory of deep boreholes."
  },
  "Geo-Mapping – Open Pit Foundation": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "ISRM / IS 13365",
    description: "Photogrammetric and scanline structural discontinuity mapping for rock slope stability, bench design, and pit stabilization."
  },

  // NDT & Structural
  "Low Strain Pile Integrity Test (PIT)": {
    image: "/assets/services/ndt/pile-integrity-test-pit-sonic.jpeg",
    code: "ASTM D5882 / IS 14893",
    description: "Sonic pulse echo acoustic test to evaluate pile shaft continuity, physical necking, bulb formation, and toe depth."
  },
  "Half-Cell Potential Test": {
    image: "/assets/services/structural-health/half-cell-corrosion-mapping.png",
    code: "ASTM C876",
    description: "Electrochemical potential mapping against reference electrode to detect active rebar corrosion probability."
  },
  "Rebound Hammer Test": {
    image: "/assets/services/ndt/rebound-hammer-concrete-testing.jpeg",
    code: "IS 13311 (Part 2) / ASTM C805",
    description: "Surface rebound hardness index evaluating relative concrete compressive strength and structural uniformity."
  },
  "Cover Meter / Profometer Test": {
    image: "/assets/services/ndt/rebound-hammer-upv.jpeg",
    code: "BS 1881:Part 204 / DIN 1045",
    description: "Electromagnetic scanning for rebar positioning, concrete cover depth, and reinforcement spacing."
  },
  "Span / Bridge Load Test": {
    image: "/assets/services/structural-health/bridge-deflection-load-test.jpeg",
    code: "IRC:SP:51 / IRS Bridge Rules",
    description: "Full-scale proof load and deflection testing of bridge spans using calibrated dial gauges and data loggers."
  },
  "Carbonation Depth Test": {
    image: "/assets/services/ndt/bridge-pier-ndt-testing.jpeg",
    code: "BS EN 14630 / RILEM CPC-18",
    description: "Phenolphthalein indicator spray across freshly fractured concrete matrix measuring depassivation depth."
  },
  "Ultrasonic Pulse Velocity (UPV)": {
    image: "/assets/services/ndt/ultrasonic-pulse-velocity-upv.jpeg",
    code: "IS 13311 (Part 1) / ASTM C597",
    description: "Direct and indirect electro-acoustic pulse transit time mapping internal cracks, honeycombing, and voids."
  },
  "Cross-Hole Sonic Logging Test (CHST/CHUM)": {
    image: "/assets/services/ndt/pile-integrity-pit.jpeg",
    code: "ASTM D6760",
    description: "High-frequency ultrasonic tomography between water-filled tubes in deep drilled shafts."
  },

  // Material Testing
  "Compressive Strength Test": {
    image: "/assets/services/materials/concrete-cube-compression-machine.jpeg",
    code: "IS 516 / ASTM C39 / IS 4031",
    description: "Peak compressive crushing load and compressive strength determination on standard cubes and cylindrical cores."
  },
  "Tensile Test – Tensile Strength, Yield Strength, 0.2% Proof Stress & Elongation": {
    image: "/assets/services/materials/rebar-tensile-yield-test.png",
    code: "IS 1786 / ISO 6892 / ASTM A370",
    description: "Full-scale servo-hydraulic tensile stress-strain evaluation of steel rebars, yield stress (0.2% proof), and elongation."
  },
  "Bend Test / Re-Bend Test": {
    image: "/assets/services/materials/tmt-rebar-bend-rebend-test.png",
    code: "IS 1599 / IS 1786",
    description: "Mandrel cold bending and reverse bending to evaluate ductility and cracking susceptibility of reinforcement rebars."
  },
  "Coupler Static Tensile Test": {
    image: "/assets/services/materials/rebar-tensile-yield-test.png",
    code: "IS 16172",
    description: "Tensile proof test verifying rebar coupler connection strength exceeds 100% of parent bar ultimate tensile strength."
  },
  "Mass per Metre Determination": {
    image: "/assets/services/materials/steel-rebar-tensile-test.png",
    code: "IS 1786",
    description: "Weighing cut specimen lengths under calibrated precision balances to ensure cross-sectional rolling tolerance compliance."
  },
  "Prestressing Strand Breaking Strength Test": {
    image: "/assets/services/materials/universal-testing-machine-utm-steel.png",
    code: "IS 14268 / ASTM A416",
    description: "Servo-controlled UTM grip jaw test determining ultimate breaking load and 0.2% proof load on 7-ply HT strands."
  },
  "Sieve Analysis / Grading Test": {
    image: "/assets/services/materials/aggregate-crushing-impact-testing.png",
    code: "IS 2386 (Part 1) / ASTM C136",
    description: "Mechanical particle size grading and fineness modulus determination for fine and coarse aggregate matrices."
  },
  "Aggregate Crushing Value Test": {
    image: "/assets/services/materials/aggregate-crushing-impact-testing.png",
    code: "IS 2386 (Part 4) / BS 812",
    description: "Resistance of mineral aggregate to crushing under gradually applied compressive load of 400 kN."
  },
  "Aggregate Impact Value Test": {
    image: "/assets/services/materials/aggregate-crushing-impact-testing.png",
    code: "IS 2386 (Part 4) / BS 812",
    description: "Resistance of aggregate to sudden shock or impact loading using standard hammer drop apparatus."
  },
  "Los Angeles / Aggregate Abrasion Value Test": {
    image: "/assets/services/materials/aggregate-crushing-impact-testing.png",
    code: "IS 2386 (Part 4) / ASTM C131",
    description: "Rotary drum steel ball abrasion measuring aggregate hardness and resistance to surface wear."
  },
  "Penetration": {
    image: "/assets/services/materials/bitumen-ductility-penetration.png",
    code: "IS 1203 / ASTM D5",
    description: "Consistency and hardness of bitumen binder measured by penetration of standard needle under 100g load at 25°C."
  },
  "Ductility": {
    image: "/assets/services/materials/bitumen-ductility-penetration.png",
    code: "IS 1208 / ASTM D113",
    description: "Distance in centimeters to which a standard bituminous briquette specimen can elongate before breaking."
  },
  "Softening Point": {
    image: "/assets/services/materials/bitumen-ductility-penetration.png",
    code: "IS 1205 / ASTM D36",
    description: "Temperature at which bituminous binder softens and sags 25mm through brass ring-and-ball apparatus."
  },
  "Marshall Stability & Flow": {
    image: "/assets/services/materials/marshall-stability-bituminous-mix.png",
    code: "ASTM D6927 / AASHTO T245",
    description: "Maximum compressive load resistance and plastic flow of compacted bituminous pavement specimens at 60°C."
  },
  "Concrete Slump Test": {
    image: "/assets/services/materials/concrete-batch-slump-flow.png",
    code: "IS 1199 / ASTM C143",
    description: "Workability, flow consistency, and cohesion of freshly mixed concrete in standard frustum slump cone."
  },
  "Rapid Chloride Penetration Test (RCPT)": {
    image: "/assets/services/materials/rcpt-durability-chloride-migration.png",
    code: "ASTM C1202 / AASHTO T277",
    description: "Coulombs passed through concrete slice under 60V electric potential measuring electrical conductance and permeability."
  },
  "Rapid Chloride Migration Test (RCMT)": {
    image: "/assets/services/materials/rcpt-durability-chloride-migration.png",
    code: "NT BUILD 492",
    description: "Non-steady state migration coefficient determined under external electrical field with silver nitrate colorimetric indicator."
  },
  "Fineness Test – Blaine Air Permeability / Sieve Method": {
    image: "/assets/services/materials/blaine-fineness-cement-testing.png",
    code: "IS 4031 (Part 2) / ASTM C204",
    description: "Specific surface area (cm²/g) of cement powder determined by airflow permeability through compacted bed."
  },
  "Standard Consistency Test": {
    image: "/assets/services/materials/cement-mortar-compressive-strength.jpeg",
    code: "IS 4031 (Part 4) / ASTM C187",
    description: "Water percentage required to produce a standard cement paste using Vicat needle apparatus."
  },
  "Initial & Final Setting Time Test": {
    image: "/assets/services/materials/cement-mortar-compressive-strength.jpeg",
    code: "IS 4031 (Part 5) / ASTM C191",
    description: "Elapsed time for cement paste to lose plasticity and achieve sufficient rigid hardness."
  }
};

export const getFallbackTestImage = (serviceSlug: string): string => {
  if (serviceSlug.includes('material')) return '/assets/services/materials/universal-testing-machine-utm-steel.png';
  if (serviceSlug.includes('ndt') || serviceSlug.includes('structural')) return '/assets/services/ndt/rebound-hammer-concrete-testing.jpeg';
  if (serviceSlug.includes('geophysic')) return '/assets/services/geophysical/masw-seismic-imaging-2d.png';
  return '/assets/services/soil-testing/triaxial-shear-lab.png';
};

export const getTestInspectionDetails = (testName: string, category: string, serviceSlug: string): SelectedTestModalData => {
  const meta = TEST_METADATA_REGISTRY[testName] || {
    image: getFallbackTestImage(serviceSlug),
    code: "NABL / IS / ASTM Certified",
    description: `Standardized testing procedure for ${testName} executed under strict NABL-accredited quality assurance and laboratory controls.`
  };

  return {
    name: testName,
    category,
    code: meta.code,
    image: meta.image,
    description: meta.description
  };
};

interface ServiceParameterInspectorProps {
  test: SelectedTestModalData | null;
  onClose: () => void;
}

export const ServiceParameterInspector: React.FC<ServiceParameterInspectorProps> = ({ test, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (test) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [test, onClose]);

  if (!test) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#062B5C]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={test.name}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase">
              <span>{test.category}</span>
              <span>•</span>
              <span className="text-[#D71920]">{test.code}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-[#062B5C] mt-1">
              {test.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
            aria-label="Close test inspection"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Image */}
        <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-200">
          <img
            src={test.image}
            alt={test.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#062B5C]/85 backdrop-blur-xs text-white text-[11px] font-mono rounded flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>SIMCON Testing Apparatus</span>
          </div>
        </div>

        {/* Modal Description & CTA */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-[#536271] leading-relaxed">
            {test.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
            <span className="text-xs font-mono text-slate-400">
              NABL Scope Parameter • Available Pan-India
            </span>
            <Link
              to={`/contact?test=${encodeURIComponent(test.name)}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D71920] hover:bg-[#B51319] text-white text-xs font-mono font-bold rounded transition-colors shadow-sm"
            >
              <span>Request Test Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
