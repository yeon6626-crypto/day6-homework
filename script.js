const goalInput = document.querySelector("#goalInput");
const addGoalBtn = document.querySelector("#addGoalBtn");
const goalList = document.querySelector("#goalList");
const errorMessage = document.querySelector("#errorMessage");
const goalCount = document.querySelector("#goalCount");


let goalTotal=0;

addGoalBtn.addEventListener("click", function () {
	console.log("추가 버튼 클릭");
});

addGoalBtn.addEventListener("click",function () {
	const goalText = goalInput.value;

	console.log(goalText);
});

addGoalBtn.addEventListener("click",function () {
	const goalText = goalInput.value.trim();

	if (goalText === "") {
		errorMessage.textContent = "목표를 입력해주세요.";
		return;
  }

	errorMessage.textContent = "";

	const li=document.createElement("li");
	li.classList.add("goal-item");

	const span=document.createElement("span");
	span.textContent=goalText;
	span.classList.add("goal-text");

	const deleteBtn=document.createElement("button");
	deleteBtn.textContent="삭제";
	deleteBtn.classList.add("delete-btn");

	li.appendChild(span);
	li.appendChild(deleteBtn);

    span.addEventListener("click", function () {
	span.classList.toggle("done");
});
    deleteBtn.addEventListener("click", function () {
	li.remove();
    goalTotal=goalTotal-1;
	updateGoalCount();
});
	goalList.appendChild(li);

    goalTotal=goalTotal+1;
	updateGoalCount();


	goalInput.value="";
});

addGoalBtn.addEventListener("click",addGoal);