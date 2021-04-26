import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  // UncontrolledDropdown,
  // DropdownMenu,
  // DropdownItem,
  // DropdownToggle,
} from 'reactstrap';

import { useTranslation } from 'react-i18next';
import { LocalizedLink as Link, useLocalization } from 'gatsby-theme-i18n';
import { useLocation } from '@reach/router';

//import { useIdent } from './AuthProvider';
//import { useMember } from './MemberProvider';

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  //const ident = useIdent();
  //const member = useMember();
  const { t } = useTranslation();

  const { locale, defaultLang } = useLocalization();
  const location = useLocation();

  let originalPath = location.pathname;
  if (locale !== defaultLang) {
    const [, , ...rest] = originalPath.split('/');
    originalPath = `/${rest.join('/')}`;
  }

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Navbar className='fixed-top' color='primary' dark expand='md'>
        <Container>
          <NavbarToggler onClick={toggle} />
          <NavbarBrand style={{ fontFamily: 'Days One' }} href='/'>
            {t('react-academy')}
          </NavbarBrand>

          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink tag={Link} activeClassName='active' to='/'>
                  {t('home')}
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink tag={Link} activeClassName='active' to='/about'>
                  {t('about')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} activeClassName='active' to='/blog'>
                  {t('blog')}
                </NavLink>
              </NavItem> */}

              <NavItem>
                <NavLink
                  tag={Link}
                  to={originalPath}
                  language={locale === 'en' ? 'fr' : 'en'}
                >
                  {locale === 'en' ? 'Français' : 'English'}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

//import logo from '../images/oldLogoReact.svg';
//import { globalHistory } from '@reach/router';
//import ToggleMenu from './toggle-menu';

// export function Menu1111(props) {
//   const [isOpen, setOpen] = useState(false);
//   const [color, setColor] = useState(
//     props.inlineMenu ? 'transparent' : 'primary'
//   );

//   const { t } = useTranslation();

//   //when we scroll into or out of the carousel,
//   //set the background of the menu blue or transparent
//   //(depending if over the carousel)
//   const crossTreshold = useCallback(
//     (entries) => {
//       let color = 'transparent';
//       entries.forEach((entry) => {
//         color = entry.intersectionRatio < 0.05 ? 'primary' : 'transparent';
//       });

//       if (!isOpen) setColor(color);
//     },
//     [isOpen]
//   );

//   //creates a new observer (if there is a carousel on the page)
//   //to see our scroll position
//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.05,
//     };
//     let observer;
//     //console.log('test observer');

//     if (document.querySelector('.carousel')) {
//       //console.log('connect observer');
//       observer = new IntersectionObserver(crossTreshold, options);
//       observer.observe(document.querySelector('.carousel'));
//     }

//     return function cleanup() {
//       observer && observer.disconnect();
//       //console.log('disconnect observer');
//     };
//   }, [location.key, crossTreshold]); //globalHistory.location.pathname

//   //toggle the menu visibility when we have a hamburger menu
//   const toggle = () => {
//     setOpen(!isOpen);
//     setColor('primary');
//   };

//   return (
//     <Navbar
//       className='fixed-top'
//       style={{ transition: 'background-color 1s ease' }}
//       color={color}
//       dark
//       expand='md'
//     >
//       <NavbarToggler onClick={toggle} />
//       <NavbarBrand style={{ fontFamily: 'Days One' }} href='/'>
//         <Logo height='34' width='34' className='mr-3' />

//         {t('react-academy')}
//       </NavbarBrand>

//       <Collapse isOpen={isOpen} navbar>
//         <Nav className='ml-auto' navbar>
//           <NavItem>
//             <NavLink tag={Link} activeClassName='active' to='/'>
//               {t('home')}
//             </NavLink>
//           </NavItem>

//           {props.inlineMenu &&
//             props.inlineMenu.map((item, idx) => (
//               <NavItem key={idx} className='d-md-none d-lg-block'>
//                 <NavLink href={item.link}>{item.name}</NavLink>
//               </NavItem>
//             ))}
//           <NavItem>
//             <NavLink tag={Link} activeClassName='active' to='/handouts/'>
//               {t('handouts')}
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href='https://photoGallery.reactacademy.live/'>
//               {t('photo-gallery')}
//             </NavLink>
//           </NavItem>

//           <UncontrolledDropdown nav inNavbar>
//             <DropdownToggle nav caret>
//               {t('other-training')}
//             </DropdownToggle>
//             <DropdownMenu right>
//               <DropdownItem href='https://www.AngularAcademy.ca/'>
//                 Angular Academy
//               </DropdownItem>
//               <DropdownItem href='https://www.VueAcademy.ca/'>
//                 Vue Academy
//               </DropdownItem>
//               <DropdownItem href='https://www.KubernetesAcademy.ca'>
//                 Kubernetes Academy
//               </DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem href='https://www.Coding-Academy.ca'>
//                 Coding Academy
//               </DropdownItem>
//             </DropdownMenu>
//           </UncontrolledDropdown>
//           <UncontrolledDropdown nav inNavbar>
//             <DropdownToggle nav caret>
//               {locale === 'en' ? (
//                 <En height='34' />
//               ) : locale === 'ca' ? (
//                 <Ca height='34' />
//               ) : (
//                 <Fr height='34' />
//               )}
//             </DropdownToggle>
//             <DropdownMenu right>
//               {locale !== 'en' && (
//                 <DropdownItem
//                   tag={LanguageLink}
//                   to={originalPath}
//                   language={'en'}
//                 >
//                   <En height='34' className='mr-3' />
//                   US and World
//                 </DropdownItem>
//               )}
//               {locale !== 'ca' && (
//                 <DropdownItem
//                   tag={LanguageLink}
//                   to={originalPath}
//                   language={'ca'}
//                 >
//                   <Ca height='34' className='mr-3' />
//                   Canada English
//                 </DropdownItem>
//               )}
//               {locale !== 'fr' && (
//                 <DropdownItem
//                   tag={LanguageLink}
//                   to={originalPath}
//                   language={'fr'}
//                 >
//                   <Fr height='34' className='mr-3' />
//                   Français Canada
//                 </DropdownItem>
//               )}
//             </DropdownMenu>
//           </UncontrolledDropdown>
//           {/* <NavItem>
//             <NavLink
//               tag={Link}
//               to={originalPath}
//               language={locale === 'en' ? 'fr' : 'en'}
//             >
//               {locale === 'en' ? 'Français' : 'English'}
//             </NavLink>
//           </NavItem> */}
//         </Nav>
//       </Collapse>
//     </Navbar>
//   );
// }
