import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Icon from '../../Components/Icon';
import Link from '../../Helpers/link';
import logo from '../../Assets/logo.png';
import Search from '../../Components/Search';
import {
  Wrapper,
  OptionsWrapper,
  OptionsButton,
  OptionsContent,
  Option,
  Title,
  Content
} from './styled';
import { removeUserToken } from '../../Helpers/userToken';
import { deleteToken } from '../../Redux/actions';

const Header = ({ location }) => {
  const dispatch = useDispatch();

  const [options, setOptions] = useState(false);

  const optionsFocus = useCallback(
    () => {
      setOptions(!options)
    }, [options]
  );

  const optionsBlur = useCallback(
    () => {
      setOptions(false)
    }, []
  );

  const logOut = useCallback(() => {
    removeUserToken();
    dispatch(deleteToken());
    window.location.reload();
    }, [dispatch]
  )

  const routeCheck = location.pathname !== '/login' && location.pathname !== '/new-user'

  return (
    <Wrapper vis={routeCheck}>
      <Content>
        <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt='logo' />
          <Title>
            Game<b>Tracker</b>
          </Title>
        </Link>

        <Search />

        <OptionsWrapper vis={routeCheck}>
          <OptionsButton open={options} tabIndex='0' onClick={optionsFocus} onBlur={optionsBlur}>
            Options <Icon>arrow_drop_down</Icon>
          </OptionsButton>

          <OptionsContent open={options}>
            <Link to='/my-games' style={{width: '100%'}}>
              <Option open={options}>
                My List
                <Icon name='th-list' />
              </Option>
            </Link>
            <Option onClick={logOut}>
              Log Out
              <Icon name='sign-out-alt' />
            </Option>
          </OptionsContent>
        </OptionsWrapper>
      </Content>
    </Wrapper>
  )
}

export default withRouter(Header);