
     
  
    let chatHistory = [];
    function showChatHistory() {
  console.log(chatHistory);
  alert("Chat history is printed in console. Press F12 → Console to view it.");
}
if(document.getElementById("chatInput")){
    document.getElementById("chatInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
}
    function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value.toLowerCase();
  chatBox.innerHTML += `
<p class="user-msg">
   <b>You:</b> ${input.value}
</p>
`;
  
chatHistory.push({
  sender: "user",
  message: input.value
});
  if (userText.trim() === "") {
    return;
  }

  const typingId = `typingMsg${Date.now()}`;

chatBox.innerHTML += `
<p class="bot-msg" id="${typingId}">
   <b>Bot:</b> Typing...
</p>
`;



setTimeout(() => {

   document.getElementById(typingId).innerHTML =
      `<b>Bot:</b> ${botReply}`;

   chatBox.scrollTop = chatBox.scrollHeight;

}, 1000);
  let botReply = "";

   if(userText.includes("dma")){
    botReply = `
DMA stands for Direct Memory Access.

Simple Explanation:
DMA allows I/O devices to transfer data directly to memory without continuous CPU involvement.

Why it is important:
It reduces CPU workload and improves efficiency.

Exam Tip:
DMA is faster than interrupt-driven I/O for large data transfers.
`;
  }
  else if(userText.includes("pipelining")){

botReply = `
Pipelining is a CPU performance technique.

Core Idea:
Instruction execution is divided into stages.

Stages:
1. Fetch
2. Decode
3. Execute
4. Memory
5. Write Back

Advantage:
Increases throughput.

Disadvantage:
Hazards may occur.

Exam Point:
Three hazards are structural, data, and control hazards.
`;

}
  if (userText.includes("coa")) {
    botReply = "COA important topics are pipelining, cache memory, DMA, interrupts, and instruction cycle.";
  }

  else if (userText.includes("java")) {
    botReply = "Java important topics are OOP, exception handling, multithreading, AWT, and applets.";
  }

  else if (userText.includes("fla") || userText.includes("automata")) {
    botReply = "FLA topics include DFA, NFA, regular expressions, CFG, PDA, and Turing Machine.";
  }

  else if (userText.includes("cyber")) {
    botReply = "Cybersecurity topics include malware, phishing, ransomware, cyber forensics, and network security.";
  }

  else if (userText.includes("plan")) {
    botReply = "Use this plan: Day 1 basics, Day 2 important questions, Day 3 revision and viva practice.";
  }

  else if (userText.includes("viva")) {
    botReply = "For viva, prepare short definitions, examples, and differences between related concepts.";
  }
   
  else {
    botReply = "I can help with COA, Java, FLA, Cybersecurity, study plans, and viva questions.";
  }

  

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
  chatHistory.push({
  sender: "bot",
  message: botReply
});
}
    function downloadPlan() {
  const output = document.getElementById("output").innerText;

  const file = new Blob([output], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "PrepPilot-Study-Plan.txt";

  link.click();
}
   
function toggleTheme(){

   document.body.classList.toggle("light-mode");

   if(document.body.classList.contains("light-mode")){

      localStorage.setItem("theme", "light");

   }

   else{

      localStorage.setItem("theme", "dark");

   }

}
    

function attachTaskListeners() {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;

  const tasks = taskList.querySelectorAll("input[type='checkbox']");

  tasks.forEach((task) => {
    task.onchange = updateTaskProgress;
  });
}

function updateTaskProgress() {
  const taskList = document.getElementById("taskList");
  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");
  const taskStatus = document.getElementById("taskStatus");

  if (!taskList || !progressText || !progressFill || !taskStatus) return;

  const tasks = taskList.querySelectorAll("input[type='checkbox']");
  let completed = 0;

  tasks.forEach((task) => {
    if (task.checked) completed++;
  });

  const percentage =
    tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);

  taskStatus.innerText = `${completed} out of ${tasks.length} tasks completed`;
  progressText.innerText = `Progress: ${percentage}%`;
  progressFill.style.width = percentage + "%";
  saveTasks();
}

    const quotes = [

  "Discipline beats motivation.",

  "Small progress every day becomes massive success.",

  "Consistency creates confidence.",

  "Focus on one task at a time.",

  "Winners execute while others hesitate.",

  "Pressure creates diamonds."

];
function generateQuote(){

   const quoteBox = document.getElementById("quoteText");

   if(!quoteBox){
      return;
   }

   const randomIndex =
      Math.floor(Math.random() * quotes.length);

   quoteBox.innerText = quotes[randomIndex];
}
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (!taskInput || !taskList) {
    return;
  }

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  taskList.innerHTML += `
    <label>
      <input type="checkbox" onchange="updateTaskProgress()"> ${taskText}
    </label><br>
  `;

  taskInput.value = "";
    attachTaskListeners();
  updateTaskProgress();
  saveTasks();
}
function saveTasks() {

  const taskList = document.getElementById("taskList");

  if(!taskList){
    return;
  }

  localStorage.setItem(
    "tasks",
    taskList.innerHTML
  );

}

 let progress = 0;

function increaseProgress() {
  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");

  if(!progressText || !progressFill){
    return;
  }

  if (progress < 100) {
    progress += 20;
  }

  progressText.innerText = `Progress: ${progress}%`;
  progressFill.style.width = progress + "%";
  progressFill.style.background = "orange";
}
    function typeText(text) {
  const output = document.getElementById("output");

  if(!output){
    return;
  }

  output.innerText = "";

  let index = 0;

  const typing = setInterval(() => {
    output.innerText += text[index];
    index++;

    if (index >= text.length) {
      clearInterval(typing);
    }
  }, 40);
}
    function selectSubject(subjectName){

   document.getElementById("subjectInput").value = subjectName;

}
    let timeLeft = 25 * 60;
let timer = null;

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  document.getElementById("timerDisplay").innerHTML =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  if (timer !== null) {
    return;
  }

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      alert("Focus session completed!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = 25 * 60;
  updateTimerDisplay();
}
    function generateOutput() {
      const subject = document.getElementById("subjectInput").value.toLowerCase();
      const mode = document.getElementById("modeInput").value;
      const level = document.getElementById("levelInput").value;
      const output = document.getElementById("output");

      let result = "";

      if (subject.includes("coa")) {
        if(level === "beginner"){

   result = `
   <h2>Beginner COA Topics</h2>
   <ul>
      <li>What is CPU?</li>
      <li>Instruction Cycle</li>
      <li>Basic Memory</li>
   </ul>
   `;
}

else if(level === "advanced"){

   result = `
   <h2>Advanced COA Preparation</h2>
   <ul>
      <li>Pipeline Hazard Numericals</li>
      <li>Cache Mapping Problems</li>
      <li>DMA vs Interrupt Analysis</li>
   </ul>
   `;
}
        if (mode === "topics") {
          result = `
            <h2>Important COA Topics</h2>
            <ul>
              <li>Pipelining and Hazards</li>
              <li>Cache Memory Mapping</li>
              <li>DMA and I/O Organization</li>
              <li>Instruction Cycle</li>
              <li>Interrupts</li>
            </ul>
          `;
        }
        

        else if (mode === "questions") {
          result = `
            <h2>Probable COA Questions</h2>
            <ul>
              <li>Explain instruction execution cycle.</li>
              <li>Differentiate between polling, interrupt and DMA.</li>
              <li>Explain pipeline hazards with examples.</li>
              <li>Solve a direct-mapped cache numerical.</li>
            </ul>
          `;
        }

        else if (mode === "viva") {
          result = `
            <h2>COA Viva Questions</h2>
            <ul>
              <li>What is pipelining?</li>
              <li>What is a cache hit?</li>
              <li>What is DMA?</li>
              <li>What is an interrupt?</li>
            </ul>
          `;
        }

        else {
          result = `
            <h2>COA 3-Day Study Plan</h2>
            <ul>
              <li>Day 1: Instruction Cycle + I/O</li>
              <li>Day 2: Pipelining + Hazards</li>
              <li>Day 3: Cache Memory + Revision</li>
            </ul>
          `;
        }
      }

      else if (subject.includes("java")) {
        result = `
          <h2>Java Preparation</h2>
          <ul>
            <li>OOP Concepts</li>
            <li>Exception Handling</li>
            <li>Multithreading</li>
            <li>AWT and Event Handling</li>
            <li>Applet Basics</li>
          </ul>
        `;
      }

      else if (subject.includes("fla")) {
        result = `
          <h2>FLA Preparation</h2>
          <ul>
            <li>DFA and NFA</li>
            <li>Regular Expressions</li>
            <li>CFG and CNF</li>
            <li>PDA</li>
            <li>Turing Machine Basics</li>
          </ul>
        `;
      }
      else if(subject.includes("cybersecurity") || subject.includes("cyber")) {
  if(mode === "topics") {
    result = `
      <h2>Important Cybersecurity Topics</h2>
      <ul>
        <li>Malware, Spyware and Ransomware</li>
        <li>Cyber Forensics</li>
        <li>Phishing and Social Engineering</li>
        <li>Network Security Basics</li>
      </ul>
    `;
  }

  else if(mode === "questions") {
    result = `
      <h2>Probable Cybersecurity Questions</h2>
      <ul>
        <li>Define malware.</li>
        <li>What is spyware?</li>
        <li>Explain ransomware with an example.</li>
        <li>What do you mean by cyber forensics?</li>
      </ul>
    `;
  }

  else if(mode === "viva") {
    result = `
      <h2>Cybersecurity Viva Questions</h2>
      <ul>
        <li>What is malware?</li>
        <li>What is ransomware?</li>
        <li>What is cyber forensics?</li>
        <li>What is phishing?</li>
      </ul>
    `;
  }
      

  else {
    result = `
      <h2>Cybersecurity 3-Day Study Plan</h2>
      <ul>
        <li>Day 1: Malware + Phishing</li>
        <li>Day 2: Network Security + Cyber Forensics</li>
        <li>Day 3: Revision + Viva Practice</li>
      </ul>
    `;
  }
}
          
      
      

      else {
        result = `
          <h2>No data found</h2>
          <p>Try entering COA, Java, or FLA.</p>
        `;
      }
      result += `
  <hr>
  <p><b>Selected Difficulty:</b> ${level}</p>
`;
      typeText("Analyzing Syllabus..");
      
      setTimeout(()=>{
        output.innerHTML=result;
      },2000);
    }
    if(document.getElementById("quoteText")){
   generateQuote();
}

if(localStorage.getItem("theme") === "light"){
   document.body.classList.add("light-mode");
}

if(localStorage.getItem("tasks")){

   document.getElementById("taskList").innerHTML =
      localStorage.getItem("tasks");

}
attachTaskListeners();
updateTaskProgress();