import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '../imgs/logo.png';

import { Outlet, useNavigate } from 'react-router-dom';
import '../layout/AppLayout.style.css';
import { useState } from 'react';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };
  return (
    <div>
      {/* bg-body-tertiary bg-dark*/}
      {/* 네비게이션 바가 특정 화면 크기 이상일 때만 확장, 992px 이상일 때 수평으로 펼쳐지고, 그보다 작으면 접혀서 모바일 메뉴 아이콘(햄버거 메뉴)으로 표시 */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          position: 'fixed',
          width: '100%',
          zIndex: 5,
          top: 0,
        }}
        data-bs-theme="dark"
      >
        {/* fluid를 사용하면 브라우저의 전체 너비를 가득 차는 레이아웃 */}
        <Container fluid>
          {/*  네비게이션 바의 브랜드(로고 또는 사이트 이름)를 표시하는 요소 */}
          <Navbar.Brand href="/">
            <img className="logo-img" width={210} src={LogoImg} alt="logo" />
          </Navbar.Brand>

          {/* 모바일 화면에서 메뉴를 펼치고 접는 토글 버튼을 설정하는 속성 */}
          {/* aria-controls="navbarScroll"는 접히는 메뉴와 토글 버튼이 연결된 상태임을 보조기술(스크린 리더 등)에 알려주는 접근성 속성입니다. navbarScroll는 Navbar.Collapse 컴포넌트에 지정된 id 속성과 동일한 값을 가져야 함 */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* 접히거나 펼쳐지는 메뉴 영역, Toggle과 연결 */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* 네비게이션 링크들을 그룹화하여 표시하는 컴포넌트 */}
            <Nav
              className="me-auto my-2 my-lg-0 wonder"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: 'white' }}>
                Home
              </Nav.Link>
              <Nav.Link href="/movies" style={{ color: 'white' }}>
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 placeholder-color-red"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 자손 라우터들을 보여줌 */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
