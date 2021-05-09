import ToDoList from '../pages/ToDoList';
import Categories from '../pages/Categories';

const ROUTES = [
  {
    label: 'Todo list',
    path: '/',
    component: ToDoList,
  },
  {
    label: 'Categories',
    path: '/categories',
    component: Categories,
  },
];

export default ROUTES;
