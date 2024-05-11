import { useEffect, useState } from "react";

// You are a helpful assistant in giving prediction to the user regarding multiple disease prediction. 
// The disease prediction options to be selected by the user are 
// 1) Diabetes
// 2) Heart Disease
// 3) Parkinson's Disease
// Give the user a brief about the topic mentioned in the option if the user selects an option.
// After giving the brief about the topic, give the following options to user
// 1) Suggest some best medicines according to the disease selected.
// 2) Doctor appointment

const MSGScreen = () => {

  const [loading, setLoading] = useState(false);
  async function handleTypeWriter(txt) {
    try{
      var i = 0;
    var speed = 10;
    let newId = messages.length-1;
    if(document.getElementById(newId)){
      document.getElementById(newId).innerHTML = "";
      setTimeout(() => {
        typeWriter();
        
      }, 2000);
    }
    async function typeWriter() {
      try{
        if (await i < txt.length) {
          document.getElementById(newId).innerHTML += await txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      catch(err){
        console.log("error printing");
      }
      
    }
    }
    catch(err){
      console.log("Error in printing");
    }
    
  }


  let [messages, setMessages] = useState([
    {
      label: true,
      msg: "Hi, I am a chatbot! I give guidance on diseases. \nHow may I assist you today? ",
      options: [
        "Diabetes",
        "Heart Disease",
        "Parkinson's Disease"
      ]
    }
  ]);

  useEffect(() => {
  }, [messages]);


  async function sendCompMessage(curr) {

    if (curr.msg === "Diabetes") {
      await messages.push({
        label: true,
        msg: "Diabetes is a chronic condition characterized by high blood sugar levels. \n\nThere are mainly two types: \n\nType 1, where the body doesn't produce insulin.\n\nType 2, where the body doesn't use insulin effectively. \n\nSymptoms include \nincreased thirst, \n frequent urination, and \nunexplained weight loss. \n\nLeft untreated, diabetes can lead to serious complications like heart disease, stroke, and kidney failure. \n\nManagement involves a combination of medication, lifestyle changes, and monitoring blood sugar levels. Diet, exercise, and regular check-ups are crucial in controlling the condition and preventing complications. \n\nWith proper management, people with diabetes can lead healthy and fulfilling lives.",
        options: ["Medicines", "Doctor Appointment"],
        id: 0
      });
    }
    if (curr.msg === "Heart Disease") {
      await messages.push({
        label: true,
        msg: "Heart disease refers to a range of conditions that affect the heart's function, including coronary artery disease, heart failure, and arrhythmias.\n\n It's often caused by a buildup of plaque in the arteries, restricting blood flow to the heart muscle. \n\nRisk factors include high blood pressure, high cholesterol, smoking, obesity, and lack of physical activity. \n\nSymptoms vary but may include chest pain, shortness of breath, fatigue, and palpitations. \n\nDiagnosis typically involves medical history, physical examination, and tests like ECG, echocardiogram, or cardiac catheterization. \n\nTreatment may include lifestyle changes, medications, and procedures like angioplasty or bypass surgery. \n\nPrevention is key, emphasizing a healthy diet, regular exercise, avoiding smoking, and managing underlying health conditions. \n\nEarly detection and management can significantly reduce the risk of complications and improve quality of life.",
        options: ["Medicines", "Doctor Appointment"],
        id: 1
      });
    }
    if (curr.msg === "Parkinson's Disease") {
      await messages.push({
        label: true,
        msg: "Parkinson's disease is a neurodegenerative disorder that affects movement. \n\nIt occurs when nerve cells in the brain, particularly those producing dopamine, become damaged or die. \n\nDopamine is a chemical messenger that helps control movement, so its deficiency leads to symptoms like tremors, stiffness, and difficulty with balance and coordination. \n\nOther symptoms may include slowness of movement, freezing, speech changes, and non-motor symptoms like cognitive impairment, depression, and sleep disturbances.",
        options: ["Medicines", "Doctor Appointment"],
        id: 2
      });
    }
    if (curr.msg === "Medicines") {
      if (curr.id === 0) {
        await messages.push({
          label: "true",
          msg: "Medines are :\n Here's the list with line breaks: \n\n1.Metformin: This is usually the first medication prescribed for type 2 diabetes. It works by reducing glucose production in the liver and improving insulin sensitivity in the body's cells. \n\n2.Sulfonylureas: Examples include glyburide, glipizide, and glimepiride. These medications stimulate the pancreas to release more insulin. \n\n3.DPP-4 inhibitors: Drugs like sitagliptin, saxagliptin, and linagliptin work by increasing the levels of incretin hormones, which stimulate insulin release and decrease glucagon secretion.\n\n4.GLP-1 receptor agonists: These injectable medications, such as liraglutide, exenatide, and dulaglutide, mimic the action of incretin hormones. They help lower blood sugar levels, slow stomach emptying, and promote weight loss.\n\n5.SGLT2 inhibitors: Drugs like empagliflozin, dapagliflozin, and canagliflozin work by blocking the reabsorption of glucose in the kidneys, allowing excess glucose to be excreted in the urine.",
          options: ['Doctor Appointment']
        });
      }
      if (curr.id === 1) {
        await messages.push({
          label: "true",
          msg: "Medines : \n\n1.Aspirin: Reduces blood clotting and lowers the risk of heart attack and stroke. \n\n2.Statins: Lower cholesterol levels to reduce the risk of heart attack and stroke.\n\n3.Beta-blockers: Decrease heart rate and blood pressure, relieving strain on the heart and reducing the risk of heart attack and heart failure.\n\n4.ACE inhibitors (Angiotensin-Converting Enzyme inhibitors): Dilate blood vessels, improving blood flow and reducing blood pressure, which helps in managing heart failure and preventing heart attacks.\n\n5.ARBs (Angiotensin II Receptor Blockers): Similar to ACE inhibitors, they relax blood vessels, lowering blood pressure, and are often used in people who cannot tolerate ACE inhibitors.\n\n6.Antiplatelet drugs: Besides aspirin, medications like clopidogrel are used to prevent blood clots and reduce the risk of heart attack and stroke.\n\n7.Diuretics: Help the body eliminate excess salt and water, reducing blood volume and lowering blood pressure, which is beneficial in managing heart failure and hypertension.",
          options: ['Doctor Appointment']
        });
      }
      if (curr.id === 2) {
        await messages.push({
          label: "true",
          msg: "Medines : \n\nThere's no cure for Parkinson's disease, but treatment aims to manage symptoms and improve quality of life. \n\nMedications such as\n\n1.Levodopa: Converted into dopamine in the brain, helping to alleviate motor symptoms like tremors, stiffness, and slowness of movement. \n\n2.Dopamine agonists: Mimic the effects of dopamine in the brain, helping to improve movement symptoms. They are often used alongside levodopa or as an alternative in early-stage Parkinson's.\n\n3.MAO-B inhibitors (Monoamine oxidase-B inhibitors): Help prevent the breakdown of dopamine in the brain, increasing its levels and improving motor symptoms.\n\n4.COMT inhibitors (Catechol-O-methyltransferase inhibitors): Extend the effect of levodopa by preventing its breakdown in the body, helping to manage motor fluctuations.\n\n5.Anticholinergics: Help control tremors and stiffness by blocking the action of acetylcholine, another neurotransmitter.\n\n6.Amantadine: Used to reduce dyskinesias (involuntary movements) associated with long-term levodopa use and to improve motor symptoms.\n\n7.Glutamate antagonists: Such as NMDA receptor antagonists, may help reduce dyskinesias and improve motor symptoms.",
          options: ['Doctor Appointment']
        });
      }
    }
    if (curr.msg === "Doctor Appointment") {
      await messages.push({
        label: true,
        msg: "Jatavath Pavan",
        options: ["9346158861", "https://"],
        id: 0
      });
    }
    setTimeout(() => {
      handleTypeWriter(messages[messages.length-1].msg);
    }, 2);
  }

  function handleScroll() {
    let height = document.documentElement.scrollHeight - 80;
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    });
  }

  return (
    <div className="chatbot-container">
          
    <div className="ubuntu-regular" style={{ position: "relative", padding: "10px", paddingTop: "85px", maxWidth: "800px" }}>
      {/* Printing the messages */}
      {messages && messages.map((item, index) => {
        return (
          <div>
            {item.label && <div key={index} id={index} className="msg-box" style={{ background: "#4A8A89", marginLeft: "0", borderTopLeftRadius: "0px", }}>{item.msg}</div>}
            <ul className="listing">

              {item.options && item.options.map((option, index) => {
                return (
                  <li key={index+"option"}  ><div className="option-box" onClick={async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    let data = await messages;
                    let curr = {
                      label: false,
                      msg: option,
                      id: item.id
                    }
                    await data.push(curr);
                    setMessages(data);
                    await sendCompMessage(curr);
                    setLoading(false);
                    setTimeout(() => {
                      handleScroll();
                      
                    }, 1);
                  }} style={{  width: "fit-content", margin: "10px", padding: "5px", fontSize: "14px",  textDecoration:"underline" }}>{option}</div></li>
                );
              })}
            </ul>
            {!item.label && <div className="msg-box" style={{ backgroundColor: "brown", color: "white", textAlign: "right", margin: "10px auto", marginRight: "0", borderTopRightRadius: "0px" }}>{item.msg}</div>}
          </div>
        );
      })
      }
    </div>
    </div>
  )
}

export default MSGScreen;
