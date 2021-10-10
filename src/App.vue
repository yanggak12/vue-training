<template>
  <div id="app" class="container">
   <h1 class="text-center">Todo App</h1>
  <input v-model="todoText" type="text" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo">
   <hr>
   <Todo 
   v-for="todo in todos" 
   :key="todo.id"
   :todo="todo"
   @toggle-checkbox="toggleCheckBox"
   @click-delete="deleteTodo"
   />
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
export default {
  components:{
    Todo
  },
  data(){
    return {
      todoText:'',
      todos:[
        {id: 1, text:'ex) Buy a car', checked:false},
      ]
    }
  },
  methods:{
    addTodo(){
      this.todos.push({id:Date.now(),text:this.todoText,checked:false});
      this.todoText = '';
    },
    toggleCheckBox({id,checked}){
      const index = this.todos.findIndex(todo=>{
        return todo.id === id;
        
      });
      this.todos[index].checked = checked;
    },
    deleteTodo(id){
      const index = this.todos.findIndex(todo=>todo.id===id);
      this.todos = this.todos.filter((el)=>el !== this.todos[index])
    }
  }
}
</script>

<style>

</style>
