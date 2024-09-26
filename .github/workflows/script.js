const input = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = input.value;
    if (taskText === '') return; // 空文字の場合は追加しない

    const li = document.createElement('li');
    li.textContent = taskText;

    // 削除ボタンを追加
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    input.value = '';
});
// タスクが完了した時の処理
li.classList.add('completed');
