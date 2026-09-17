"use client";

import { useState } from "react";
import { ArrowDown, Cloud, Tablet, Boxes, ClipboardList, FlaskConical, GitBranch, PackageCheck, Search, ShieldCheck, Truck, Factory, Cpu, Radio, Building2 } from "lucide-react";

type RecordRow = { id: string; name: string; context: string; status: string; detail: string; fields: [string, string][] };
type Module = { name: string; icon: typeof Boxes; description: string; columns: string[]; rows: RecordRow[] };
const modules: Module[] = [
  { name:"Receiving", icon:PackageCheck, description:"Inspect incoming material and preserve supplier-to-lot traceability.", columns:["Receipt / material","Supplier lot","Disposition"], rows:[
    {id:"RCV-0108",name:"Stator laminations",context:"LOT-ST-024",status:"Inspection",detail:"Incoming material remains on hold until the receiving inspection is complete.",fields:[["Purchase order","PO-2041"],["Material definition","MAT-STATOR-28"],["Quantity","240 ea"],["Storage location","Receiving / quarantine"]]},
    {id:"RCV-0107",name:"Magnet wire",context:"LOT-CU-019",status:"Released",detail:"Accepted wire lot is available to allocate to winding work orders.",fields:[["Purchase order","PO-2039"],["Material definition","MAT-COPPER-01"],["Quantity","12 kg"],["Storage location","Stores / wire rack"]]},
  ]},
  { name:"Shipping",icon:Truck,description:"Release finished goods with their inspection and genealogy records.",columns:["Shipment / product","Order","Status"],rows:[
    {id:"SHP-0082",name:"BLDC-28 motor assembly",context:"SO-3102",status:"Ready",detail:"The shipment references the released motor lot and its final inspection record.",fields:[["Finished lot","LOT-M28-017"],["Quantity","48 ea"],["Quality release","QR-0081"],["Destination","Demo customer A"]]},
    {id:"SHP-0083",name:"BLDC-28 motor assembly",context:"SO-3103",status:"Quality hold",detail:"A quality hold prevents this lot from being released for shipment.",fields:[["Finished lot","LOT-M28-018"],["Quantity","24 ea"],["Quality release","Pending"],["Destination","Demo customer B"]]},
  ]},
  {name:"Work orders",icon:ClipboardList,description:"Follow each build from released materials to a tested motor.",columns:["Work order / product","Operation","Status"],rows:[
    {id:"WO-1042",name:"BLDC-28 · Rev C",context:"020 / Winding",status:"In progress",detail:"Material lots, equipment and routing revision stay attached to the production record.",fields:[["Operations definition","MOTOR-28 / Rev C"],["Work center","Motor cell 01"],["Equipment","Winder W-01"],["Material lot","LOT-CU-019"],["Planned / completed","120 / 84 ea"],["Personnel class","Winding-qualified operator"]]},
    {id:"WO-1043",name:"BLDC-28 · Rev C",context:"030 / Assembly",status:"Queued",detail:"Assembly follows the approved routing and the material requirements for revision C.",fields:[["Operations definition","MOTOR-28 / Rev C"],["Work center","Motor cell 01"],["Equipment","Press P-01"],["Material lot","LOT-ST-023"],["Planned / completed","80 / 0 ea"],["Personnel class","Assembly-qualified operator"]]},
    {id:"WO-1044",name:"BLDC-28 · Rev B",context:"040 / Balance & test",status:"Quality hold",detail:"An out-of-tolerance result holds the lot for review before final release.",fields:[["Operations definition","MOTOR-28 / Rev B"],["Work center","Test cell 01"],["Equipment","Balancer B-01"],["Material lot","LOT-M28-018"],["Planned / completed","24 / 24 ea"],["Exception","NCR-0018"]]},
  ]},
  {name:"Quality",icon:ShieldCheck,description:"Connect inspections, nonconformances and release decisions to the build.",columns:["Record / inspection","Work order","Result"],rows:[
    {id:"QR-0081",name:"Final electrical inspection",context:"WO-1041",status:"Passed",detail:"Approved results are linked to the finished lot and accompany shipment release.",fields:[["Test specification","ELECTRICAL-01 / Rev B"],["Material lot","LOT-M28-017"],["Equipment","Test bench T-01"],["Disposition","Released"]]},
    {id:"NCR-0018",name:"Rotor balance review",context:"WO-1044",status:"Quality hold",detail:"Review the balance result, document the disposition and retain the original evidence.",fields:[["Test specification","BALANCE-01 / Rev A"],["Material lot","LOT-M28-018"],["Equipment","Balancer B-01"],["Disposition","Engineering review"]]},
  ]},
  {name:"Research & trials",icon:FlaskConical,description:"Keep experimental builds identifiable and separate from released production.",columns:["Trial / objective","Revision","State"],rows:[
    {id:"EXP-0024",name:"Compare winding variants",context:"Experimental / D1",status:"Research",detail:"Compare process variants against a controlled baseline before proposing a production revision.",fields:[["Baseline","MOTOR-28 / Rev C"],["Trial quantity","6 ea"],["Equipment","Winder W-01"],["Release status","Not for production"]]},
    {id:"EXP-0023",name:"Assembly process trial",context:"Experimental / D0",status:"Review",detail:"Capture the trial conditions and test evidence for engineering review.",fields:[["Baseline","MOTOR-28 / Rev C"],["Trial quantity","4 ea"],["Equipment","Press P-01"],["Release status","Not for production"]]},
  ]},
  {name:"Routings & BOMs",icon:GitBranch,description:"Version the process, material requirements and resource qualifications together.",columns:["Definition / product","Revision","Release"],rows:[
    {id:"MOTOR-28",name:"BLDC-28 production routing",context:"Revision C",status:"Released",detail:"An operations definition groups ordered segments with their material, equipment and personnel requirements.",fields:[["Routing","010 Receive → 020 Wind → 030 Assemble → 040 Test"],["BOM / material definition","BOM-M28 / Rev C"],["Process segment","020 / Stator winding"],["Equipment class","Stator winder"],["Personnel class","Winding-qualified operator"],["Material requirements","Stator ×1 · rotor ×1 · bearings ×2 · wire by recipe"]]},
    {id:"MOTOR-28-D",name:"BLDC-28 engineering trial",context:"Revision D1",status:"Draft",detail:"An experimental definition remains separate from the released production routing.",fields:[["Operations definition","MOTOR-28 / D1"],["BOM revision","BOM-M28 / D1"],["Process segment","020 / Winding trial"],["Release requirement","Engineering and quality approval"]]},
  ]},
  {name:"Resources & lots",icon:Boxes,description:"Locate equipment and materials within the manufacturing hierarchy.",columns:["Resource / type","Hierarchy","Availability"],rows:[
    {id:"W-01",name:"Stator winding station",context:"Site A / Motors / Cell 01",status:"Available",detail:"Equipment is identified by its site, area, work center and work unit.",fields:[["Enterprise / site","Demo Manufacturing / Site A"],["Area / work center","Motors / Cell 01"],["Work unit","W-01"],["Equipment class","Stator winder"]]},
    {id:"LOT-CU-019",name:"Magnet wire lot",context:"Site A / Stores",status:"Released",detail:"Material identity and supplier lot are retained as material moves into production.",fields:[["Material definition","MAT-COPPER-01"],["Supplier lot","SUP-CU-908"],["Quantity available","8.4 kg"],["Status","Available for allocation"]]},
  ]},
];

export default function MESPreview() {
  const [active,setActive]=useState(2);
  const [selected,setSelected]=useState(0);
  const [query,setQuery]=useState("");
  const module=modules[active];
  const rows=module.rows.filter(row=>[row.id,row.name,row.context,row.status].join(" ").toLowerCase().includes(query.toLowerCase()));
  const row=rows.find(item=>item.id===module.rows[selected].id) ?? rows[0];
  function navigate(index:number) {setActive(index);setSelected(0);setQuery("");}
  return <section className="mes-showcase" id="mes-demo" aria-label="Manufacturing execution interface concept">
    <div className="mes-intro"><div><p className="eyebrow">INSIDE THE SYSTEM</p><h4>A working view of manufacturing.</h4><p>Explore the modules, select a record, and follow the information behind a build.</p></div></div>
    <div className="mes-app">
      <aside className="mes-sidebar"><div className="mes-brand"><Factory size={20}/><strong>Manufacturing<span>Execution workspace</span></strong></div><p>OPERATIONS</p><nav aria-label="MES modules">{modules.map((entry,index)=>{const Icon=entry.icon;return <button key={entry.name} type="button" aria-pressed={index===active} onClick={()=>navigate(index)}><Icon size={16}/>{entry.name}</button>;})}</nav><div className="mes-site"><span className="mes-dot"/> Site A / Motor operations<small>Interactive concept · sample data</small></div></aside>
      <div className="mes-main"><header className="mes-toolbar"><span>Site A <span>/</span> Motor operations</span><span className="mes-demo-label">DEMO WORKSPACE</span></header><div className="mes-content"><div className="mes-title"><div><p>MANUFACTURING EXECUTION</p><h5>{module.name}</h5></div><span className="mes-record-count">{module.rows.length} records</span></div><p className="mes-description">{module.description}</p><label className="mes-search"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={`Search ${module.name.toLowerCase()}…`} aria-label="Search MES records"/></label>
      <div className="mes-table-wrap"><table><thead><tr>{module.columns.map(col=><th key={col}>{col}</th>)}</tr></thead><tbody>{rows.map(item=><tr key={item.id} className={item.id===row?.id?"selected":""}><td><button type="button" aria-pressed={item.id===row?.id} onClick={()=>setSelected(module.rows.indexOf(item))}>{item.id}<span>{item.name}</span></button></td><td>{item.context}</td><td><span className={`mes-status ${item.status.toLowerCase().replaceAll(" ","-")}`}>{item.status}</span></td></tr>)}</tbody></table>{rows.length===0&&<p className="mes-empty">No matching records. Try another ID, material or status.</p>}</div>
      {row && <section className="mes-record" aria-label="Selected MES record" aria-live="polite"><div className="mes-record-heading"><strong>{row.id} <span>/ Record detail</span></strong><span>TRACEABLE BY DESIGN</span></div><p>{row.detail}</p><dl>{row.fields.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
      </div><footer className="mes-app-footer"><span>Sample data</span><span>ISA-95–informed resource &amp; operations model</span></footer></div>
    </div>
    <p className="mes-caption">Portfolio concept using fictional orders, lots and quantities. Illustrates the workflow without exposing a production system.</p>
  </section>;
}

export function ManufacturingArchitecture() {
  return <section className="architecture" id="architecture" aria-label="ERP MES and factory floor architecture">
    <div className="architecture-intro"><p className="eyebrow">FROM THE FLOOR TO THE BUSINESS</p><h4>Factory devices. Edge integration.<br/>Cloud-connected operations.</h4><p>Factory devices connect through an edge device to the MES. Tablet interfaces are part of the MES, which connects to the cloud-hosted ERP.</p></div>
    <div className="architecture-diagram edge-architecture">
      <div className="factory-floor"><div className="floor-heading"><Factory size={20}/><strong>FACTORY DEVICES</strong><span>Machines · controllers · sensors</span></div><div className="floor-stations">{["Winding","Press / assembly","Balancing","Electrical test"].map((station,i)=><div key={station}><span>0{i+1}</span><Cpu size={25}/><strong>{station}</strong><small>Equipment signals &amp; results</small></div>)}</div></div>
      <div className="architecture-exchange"><ArrowDown size={18}/><span>Equipment connections <b>Machine states, measurements &amp; test results</b></span></div>
      <div className="architecture-layer control"><span className="level-tag">ON SITE / EDGE</span><Cpu size={23}/><div><h5>Edge device</h5><p>The connection point between factory equipment and the MES</p></div></div>
      <div className="architecture-exchange"><ArrowDown size={18}/><span>Equipment data into the MES <b>MQTT as a messaging design principle</b></span></div>
      <div className="mes-architecture-group">
        <div className="architecture-layer execution"><span className="level-tag">MANUFACTURING OPERATIONS</span><ClipboardList size={23}/><div><h5>MES</h5><p>Work orders · routings · material genealogy · quality · production records</p></div></div>
        <div className="operator-interface"><Tablet size={26}/><div><h5>Tablets / operator interfaces</h5><p>Part of the MES: where operators interact with the manufacturing workflow.</p></div><span>MES OPERATOR UI</span></div>
      </div>
      <div className="architecture-exchange"><ArrowDown size={18}/><span>MES ↔ ERP <b>Versioned API contracts &amp; defined data ownership</b></span></div>
      <div className="erp-cloud-group"><div className="cloud-host-label"><Cloud size={20}/><span>CLOUD-HOSTED</span></div><div className="architecture-layer enterprise"><span className="level-tag">BUSINESS OPERATIONS</span><Building2 size={23}/><div><h5>ERP</h5><p>Orders · purchasing · planning · financial inventory</p></div></div></div>
    </div>
    <div className="design-principles"><article><h5>ISA-95</h5><p>A shared model for operations, materials, equipment and personnel. Routings and BOMs connect to versioned definitions and resource requirements.</p><a href="https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard" target="_blank" rel="noreferrer">Enterprise / control integration ↗</a></article><article><h5>Purdue model</h5><p>Use the separation of business operations, manufacturing operations and equipment control to reason about responsibilities. The diagram shows the device-to-MES-to-ERP path, rather than a literal Purdue network stack.</p><a href="https://www.cisco.com/site/us/en/learn/topics/security/what-is-ot-security.html" target="_blank" rel="noreferrer">Industrial network layers ↗</a></article><article><h5>MQTT</h5><p>Publish equipment events through a broker so consumers can subscribe without coupling directly to each machine.</p><a href="https://mqtt.org/" target="_blank" rel="noreferrer">Publish / subscribe messaging ↗</a></article><article><h5>API-first contracts</h5><p>Define schemas, versions and error behavior at service boundaries. Producers and consumers can evolve against an explicit contract.</p><a href="https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_service_architecture_api_contracts.html" target="_blank" rel="noreferrer">Amazon / AWS service-contract guidance ↗</a></article></div>
    <p className="mes-caption">Simplified view: factory devices → edge → MES → cloud-hosted ERP. Tablet operator interfaces belong to the MES. Design principles describe the approach; they do not specify every deployed service or network control.</p>
  </section>;
}
