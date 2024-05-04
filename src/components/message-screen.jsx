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
      if (await i < txt.length) {
        document.getElementById(newId).innerHTML += await txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
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
    if (curr.msg === "Medicines") {
      if (curr.id === 0) {
        await messages.push({
          label: "true",
          msg: "Medines are :\n Certainly, here's the list with line breaks: \nMetformin: This is usually the first medication prescribed for type 2 diabetes. It works by reducing glucose production in the liver and improving insulin sensitivity in the body's cells. \n\nSulfonylureas: Examples include glyburide, glipizide, and glimepiride. These medications stimulate the pancreas to release more insulin. \n\nDPP-4 inhibitors: Drugs like sitagliptin, saxagliptin, and linagliptin work by increasing the levels of incretin hormones, which stimulate insulin release and decrease glucagon secretion.\n\nGLP-1 receptor agonists: These injectable medications, such as liraglutide, exenatide, and dulaglutide, mimic the action of incretin hormones. They help lower blood sugar levels, slow stomach emptying, and promote weight loss.\n\nSGLT2 inhibitors: Drugs like empagliflozin, dapagliflozin, and canagliflozin work by blocking the reabsorption of glucose in the kidneys, allowing excess glucose to be excreted in the urine.",
          options: ['Doctor Appointment']
        });
      }
    }
    if (curr.msg === "Doctor Appointment") {
      await messages.push({
        label: true,
        msg: "Pavan Pilla",
        options: ["9346158861", "https://www.askapollo.com/"],
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
    <div className="ubuntu-regular" style={{ position: "relative", padding: "10px", paddingTop: "80px", maxWidth: "800px" }}>
      {/* Printing the messages */}
      {messages && messages.map((item, index) => {
        return (
          <div>
            {item.label && <div key={index} id={index} className="msg-box" style={{ background: "#4A8A89", marginLeft: "0", borderTopLeftRadius: "0px", }}>{item.msg}</div>}
            <ul className="listing">

              {item.options && item.options.map((option, index) => {
                return (
                  <li key={index+"option"} ><div className="option-box" onClick={async (e) => {
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
                  }} style={{ backgroundColor: "grey", width: "fit-content", margin: "10px", padding: "5px", fontSize: "14px" }}>{option}</div></li>
                );
              })}
            </ul>
            {!item.label && <div className="msg-box" style={{ backgroundColor: "brown", color: "white", textAlign: "right", margin: "10px auto", marginRight: "0", borderBottomRightRadius: "0px" }}>{item.msg}</div>}
          </div>
        );
      })
      }
    </div>
  )
}

export default MSGScreen;
