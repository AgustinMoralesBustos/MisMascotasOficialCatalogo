// import React, { useEffect } from 'react';
// import './NavBar.css';

// export default function NavBarApp() {
//     useEffect(() => {
//         const listElements = document.querySelectorAll('.menu-item-show');
//         const list = document.querySelector('.menu-links');
//         const menu = document.querySelector('.menu-hamburguer');

//         const handleClick = () => {
//             listElements.forEach(element => {
//                 element.addEventListener('click', handleSubMenuToggle);
//             });
//         };

//         const handleSubMenuToggle = (event) => {
//             const subMenu = event.currentTarget.children[1];
//             const height = subMenu.clientHeight === 0 ? subMenu.scrollHeight : 0;
//             subMenu.style.height = `${height}px`;
//             event.currentTarget.classList.toggle('menu-item-active');
//         };

//         const handleResize = () => {
//             if (window.innerWidth > 800) {
//                 deleteStyleHeight();
//                 if (list.classList.contains('menu-links-show')) {
//                     list.classList.remove('menu-links-show');
//                 }
//             } else {
//                 handleClick();
//             }
//         };

//         const deleteStyleHeight = () => {
//             listElements.forEach(element => {
//                 if (element.children[1].getAttribute('style')) {
//                     element.children[1].removeAttribute('style');
//                     element.classList.remove('menu-item-active');
//                 }
//             });
//         };

//         window.addEventListener('resize', handleResize);

//         if (window.innerWidth <= 800) {
//             handleClick();
//         }

//         menu.addEventListener('click', () => {
//             if (list.classList.contains('menu-links-show')) {
//                 list.classList.remove('menu-links-show');
//             } else {
//                 list.classList.add('menu-links-show');
//             }
//         });

//         return () => {
//             window.removeEventListener('resize', handleResize);
//             listElements.forEach(element => {
//                 element.removeEventListener('click', handleSubMenuToggle);
//             });
//             menu.removeEventListener('click');
//         };
//     }, []);

//     return null;
// }