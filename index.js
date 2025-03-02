function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("請輸入內容！");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;
    
    // 點擊標記完成
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // 創建刪除按鈕
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "刪除";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "#dc3545";
    deleteBtn.style.color = "white";
    
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    
    // 清空輸入框
    taskInput.value = "";
}
