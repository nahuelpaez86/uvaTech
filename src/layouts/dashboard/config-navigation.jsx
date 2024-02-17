import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Home',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Empleados',
    path: '/employees',
    icon: icon('ic_user'),
  },
  {
    title: 'Deposito',
    path: '/deposit',
    icon: icon('ic_cart'),
  }
];

export default navConfig;
