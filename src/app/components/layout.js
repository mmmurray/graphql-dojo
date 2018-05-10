import glamorous from 'glamorous';
import { AppBar } from 'material-ui';
import React from 'react';

const ContainingDiv = glamorous.div({
  backgroundColor: '#f5f5f5',
  height: '100%',
});

const ContentDiv = glamorous.div({
  padding: '8px 16px',
});

const Layout = ({ children }) => (
  <ContainingDiv>
    <AppBar
      title="MetroLink Departures"
      showMenuIconButton={false}
      style={{ backgroundColor: '#ffdb4d' }}
      titleStyle={{ color: 'black' }}
    />
    <ContentDiv>{children}</ContentDiv>
  </ContainingDiv>
);

export default Layout;
