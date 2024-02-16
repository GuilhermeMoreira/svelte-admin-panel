import PageNotFound from '../pages/PageNotFound.svelte'
import AppPage from '../pages/AppPage.svelte'
import Misc from '../pages/_examples/Misc.svelte'
import Components from '../pages/Components.svelte'
import List from '../pages/_examples/List.svelte'
import PageButton from '../pages/_examples/PageButton.svelte'
import PageInput from '../pages/_examples/PageInput.svelte'
import PageSelect from '../pages/_examples/PageSelect.svelte'
import PageSwitch from '../pages/_examples/PageSwitch.svelte'
import PageCheckbox from '../pages/_examples/PageCheckbox.svelte'
import DatePicker from '../pages/_examples/PageDatePicker.svelte'
import PageModal from '../pages/_examples/PageModal.svelte'
import PageTextarea from '../pages/_examples/PageTextarea.svelte'

export const pages = {
  routes: [
    {
      path: '/',
      component: AppPage,
      public: true
    },
    {
      path: 'misc',
      component: Misc,
      public: true
    },
    {
      path: 'components',
      component: Components,
      public: false
    },
    {
      path: 'list',
      component: List,
      public: false
    },
    {
      path: 'components/button',
      component: PageButton,
      public: false
    },
    {
      path: 'components/input',
      component: PageInput,
      public: false
    },
    {
      path: 'components/textarea',
      component: PageTextarea,
      public: false
    },
    {
      path: 'components/select',
      component: PageSelect,
      public: false
    },
    {
      path: 'components/switch',
      component: PageSwitch,
      public: false
    },
    {
      path: 'components/checkbox',
      component: PageCheckbox,
      public: false
    },
    {
      path: 'components/datepicker',
      component: DatePicker,
      public: false
    },
    {
      path: 'components/modal',
      component: PageModal,
      public: false
    },
    {
      path: '*',
      component: PageNotFound,
      public: true
    }
  ],
  menu: [
    {
      text: 'App',
      link: '/',
      icon: '<ion-icon name="flask-outline"></ion-icon>',
      public: true
    },
    {
      text: 'Misc',
      link: '/misc',
      icon: '<ion-icon name="bar-chart-outline"></ion-icon>',
      public: true
    },
    {
      text: 'Components',
      link: '/components',
      icon: '<ion-icon name="cube-outline"></ion-icon>',
      public: false
    },
    {
      text: 'List',
      link: '/list',
      icon: '<ion-icon name="list-outline"></ion-icon>',
      public: false
    },
  ]
}