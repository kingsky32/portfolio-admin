import React from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '#components/icon/Logo';

const LogoContainer = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

const Navigation = styled.nav``;

const Icon = styled.div`
  transition: 0.25s margin ease;
`;

const AngleDown = styled(FontAwesomeIcon)`
  opacity: 0;
  transform: translateY(0.1rem);
  transition: 0.25s transform ease-out;
`;

const NavigationListContainer = styled.ul``;

const NavigationList = styled.li<{ isOpen?: boolean; length: number; active: boolean }>`
  width: 100%;
  height: ${({ isOpen, length }) =>
    isOpen ? `calc(var(--menu-list-height) * ${length + 1})` : `var(--menu-list-height)`};
  overflow: hidden;
  transition: ${({ length }) => length * 0.15}s height ease-out;

  > a {
    width: 100%;
    padding: 0 1.8rem;
    display: flex;
    height: var(--menu-list-height);
    align-items: center;
    transition: 0.25s background ease;
    ${({ active }) =>
      active &&
      css`
        background-color: var(--menu-active-text-background);
      `}

    &:hover {
      span {
        opacity: 0.8 !important;
      }
    }

    span {
      opacity: 0;
      flex: 1 0 0;
      font-size: 1.2rem;
      transform: translateY(0.1rem);
      font-weight: 500;
      transition: 0.25s opacity ease;
      ${({ active }) =>
        active &&
        css`
          color: var(--menu-active-text);
        `}
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        ${AngleDown} {
          transform: rotate(180deg);
        }
      `}
  }
`;

const NavigationSubListContainer = styled.ul``;

const NavigationSubList = styled.li<{ active: boolean }>`
  a {
    width: 100%;
    padding: 0 2rem;
    display: flex;
    height: var(--menu-list-height);
    align-items: center;
    justify-content: center;
    transition: 0.25s background ease;
    &:hover {
      span {
        opacity: 0.8;
      }
    }
    ${({ active }) =>
      active &&
      css`
        background-color: var(--menu-active-text-background);
      `}
    span {
      flex: 1 0 0;
      font-size: 1.2rem;
      transform: translateY(0.1rem);
      font-weight: 400;
      transition: 0.25s opacity ease;
      ${({ active }) =>
        active &&
        css`
          color: var(--menu-active-text);
        `}
    }
  }
`;

const Container = styled.aside`
  background-color: var(--menu-background);
  padding: 1rem 0;
  width: 5rem;
  overflow: hidden;
  transition: 0.25s width ease;
  &:hover {
    width: 20rem;
    ${Icon} {
      margin-right: 1.5rem;
    }
    ${NavigationList} {
      span {
        opacity: 1;
      }
    }
    ${AngleDown} {
      opacity: 1;
    }
  }
`;

const navigation = [
  {
    key: 'settings',
    name: 'Settings',
    uri: '/settings',
    icon: <FontAwesomeIcon icon="cog" size="lg" />,
    children: [
      {
        key: 'codes',
        name: 'Codes',
        uri: '/settings/codes',
      },
    ],
  },
];

const AsideNavigation = (): React.ReactElement => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const router = useRouter();

  function handleMouseEnter(): void {
    setIsFocus(true);
  }

  function handleMouseLeave(): void {
    setIsFocus(false);
  }

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <LogoContainer>
        <Link href="/">
          <a title="main">
            <Logo size={3.6} />
          </a>
        </Link>
      </LogoContainer>
      <Navigation>
        <NavigationListContainer>
          {navigation.map(({ key, name, children, uri, icon }) => {
            const [isOpen, setIsOpen] = React.useState<boolean>(false);
            const active: boolean = router.pathname.startsWith(uri);

            function handleToggleMenu(): void {
              setIsOpen((prevState) => !prevState);
            }

            function handleClosemenu(): void {
              setIsOpen(false);
            }

            function handleClick(event: React.MouseEvent<HTMLAnchorElement>): void {
              if (Boolean(children) === true) {
                event.preventDefault();
                handleToggleMenu();
              }
            }

            React.useEffect(() => {
              handleClosemenu();
            }, [isFocus]);

            return (
              <NavigationList isOpen={isOpen} length={children.length} key={key} active={active}>
                <Link href={uri}>
                  <a onClick={handleClick}>
                    {Boolean(icon) && <Icon>{icon}</Icon>}
                    <span>{name}</span>
                    <AngleDown icon="angle-down" size="lg" />
                  </a>
                </Link>
                {children.length > 0 && (
                  <NavigationSubListContainer>
                    {children.map(({ key, name, uri }) => {
                      const active: boolean = router.pathname.startsWith(uri);
                      return (
                        <NavigationSubList active={active} key={key}>
                          <Link href={uri}>
                            <a>
                              <span>{name}</span>
                            </a>
                          </Link>
                        </NavigationSubList>
                      );
                    })}
                  </NavigationSubListContainer>
                )}
              </NavigationList>
            );
          })}
        </NavigationListContainer>
      </Navigation>
    </Container>
  );
};

export default AsideNavigation;
