Vue.component('task',{//создаем vue компоненты
    props: ['data'],
    data() {
      return {
      }
    },
    methods: {
      task_done(){
        this.$emit('task_done')//запускаетфункцию task_done через $emit
      }
    },
    template: `// тут будет верстка самого компонента
    <div class="task">
      <div>
        <h3 class="task__title">{{data.title}}</h3>
        <p v-if="data.desc!=''" class="task__desc">{{data.desc}}</p>
      </div>
      <button class="task__done" @click="task_done()">✔️</button>//кнопочка для отметки выполнения задания
    </div>`
  })
  
  var vue = new Vue({
    el: '#app',
    data: {
      string: 'asdasda',
      new_task: {
        title: '',
        desc: ''
      },
      tasks : [
        {
          title: 'Какое-то очень важное задание №1',
          desc: 'Попробовать написать калькулятор',
        },
        {
          title: 'Прочитать книгу "Vue.js в действии"',
          desc: '',
        }
      ]
    },
    methods: { //описываем метод для добавления/удаления задач 
      add_task(){
        if(this.new_task.title != ''){ //если строка заполнена выполняется все что внутри скобок написано
          this.tasks.push({ //добавляем пушем в конец массива
            title: this.new_task.title,
            desc: this.new_task.desc
          });
          this.new_task.title=''; //очищяем поля ввода
          this.new_task.desc=''; //очищяем поля ввода
        }
      },
      delete_task(id){
        this.tasks.splice(id,1);
      }
    }
  })
