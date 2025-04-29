// App.js
import React from 'react';
import "./App.css";
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import Todo from './Pages/Todo';
import Toaster from "./Components/Toaster";
import { useToastContext } from "./contexts/ToastContext";
import FormComponent from './form';
import Dropdown from "./DropDown";
import { useThemeContext } from './contexts/ThemeContext';

function App() {
  const { toast } = useToastContext();
  const {theme,toggleTheme}=useThemeContext();
  var isDark;
  if(theme&& theme ==="light"){
   isDark=false
  }
  else{
    isDark=true;
  }
  return (
    <div className={isDark?"light":"dark"}
     style={{
      backgroundColor: isDark ? '#1c1c1c' : '#f7f9fc',
      color: isDark ? '#f1f1f1' : '#343a40',
      minHeight: '100vh',
      padding: '40px 0',
      transition: 'all 0.3s ease',
    }} >
       <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
      }}>
        <Button
          variant={isDark ? "light" : "dark"}
          onClick={toggleTheme}
          style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            fontSize: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
          }}
          title="Toggle theme"
        >
          {isDark ? '🌞' : '🌙'}
        </Button>
      </div>
<Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center" >
            <h2 style={{ fontWeight: 'bold', color:!isDark?'#343a40':'#f2f2f2' }}>📝 My Todo List</h2>
            <p className="text-muted">Stay productive. Organize your tasks.</p>
          </Col>
        </Row>

        

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm rounded-4 p-4"  style={{
      backgroundColor: isDark ? '#ffff66' : '#f7f9fc',
      color: isDark ? '#f1f1f1' : '#343a40',
      transition: 'all 0.3s ease',
    }}>
              <Todo />
            </Card>
          </Col>
        </Row>
      </Container>

      <Toaster
        showToaster={toast?.show}
        msg={toast?.msg}
        title={toast?.title}
      />
    </div>
  );
}

export default App;
