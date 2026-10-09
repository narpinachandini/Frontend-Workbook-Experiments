import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const demoUser = { name: 'Chandini Student', email: 'student@example.com', course: 'Computer Science', year: '2nd Year', studentId: 'KL-DEMO-001' };

function Login({ onLogin }) {
  const [email, setEmail] = useState('student@example.com');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');
  function submit(event) {
    event.preventDefault();
    // Demo-only authentication; replace with a secure backend for a real application.
    if (email.trim().toLowerCase() === demoUser.email && password === 'demo123') {
      setError('');
      onLogin(demoUser);
    } else setError('Demo login: use student@example.com and demo123.');
  }
  return <main className="login-layout"><section className="login-art"><span className="brand">campus<span>+</span></span><div><p className="eyebrow">YOUR LEARNING SPACE</p><h1>Everything you need<br/>to move <em>forward.</em></h1><p>One place for your academics, profile, and next steps.</p></div><small>STUDENT PORTAL · REACT LAB 8</small></section><section className="login-panel"><div className="login-box"><p className="eyebrow">WELCOME BACK</p><h2>Sign in to campus</h2><p className="muted">Use the demo credentials shown below.</p><form onSubmit={submit}><label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>{error&&<p className="error" role="alert">{error}</p>}<button className="primary">Sign in <span>→</span></button></form><div className="demo-hint"><strong>Demo account</strong><p>student@example.com</p><p>demo123</p></div></div></section></main>;
}

function AppShell({ user, page, setPage, onLogout, children }) {
  return <div className="app-shell"><aside className="sidebar"><a className="brand" href="#" onClick={e=>{e.preventDefault();setPage('Dashboard')}}>campus<span>+</span></a><p className="nav-label">WORKSPACE</p>{['Dashboard','Profile'].map(item=><button key={item} className={`nav-item ${page===item?'active':''}`} onClick={()=>setPage(item)}>{item==='Dashboard'?'▦':'◎'} <span>{item}</span></button>)}<div className="sidebar-bottom"><div className="avatar">{user.name[0]}</div><div className="mini-user"><strong>{user.name}</strong><small>{user.course}</small></div><button className="logout" onClick={onLogout} aria-label="Sign out">↗</button></div></aside><main className="main-content"><header className="topbar"><span>Student portal / {page}</span><span className="online-dot">● &nbsp; Demo mode</span></header>{children}</main></div>;
}

function Dashboard({ user, setPage }) {
  return <div className="page"><p className="eyebrow">STUDENT OVERVIEW</p><h1>Good to see you, {user.name.split(' ')[0]}.</h1><p className="muted">Here is your learning space at a glance.</p><section className="stat-grid"><article><span>PROGRAM</span><strong>{user.course}</strong><small>Current course</small></article><article><span>ACADEMIC YEAR</span><strong>{user.year}</strong><small>Current standing</small></article><article><span>PORTAL STATUS</span><strong>Active</strong><small>Demo account</small></article></section><section className="welcome-card"><div><p className="eyebrow">YOUR NEXT STEP</p><h2>Make this semester count.</h2><p>Keep your student information up to date so your portal profile is ready when you need it.</p><button className="primary" onClick={()=>setPage('Profile')}>View my profile →</button></div><div className="welcome-symbol">✳</div></section><section className="activity"><h2>Quick links</h2><button onClick={()=>setPage('Profile')}>Review profile <span>→</span></button><button onClick={()=>window.alert('This is a frontend demo. No real grades or records are connected.')}>Academic records <span>→</span></button></section></div>;
}

function Profile({ user }) {
  return <div className="page"><p className="eyebrow">YOUR ACCOUNT</p><h1>Profile</h1><p className="muted">Review your student details.</p><section className="profile-card"><div className="profile-banner"></div><div className="profile-content"><div className="big-avatar">{user.name[0]}</div><h2>{user.name}</h2><p className="muted">{user.email}</p><div className="detail-grid"><div><span>STUDENT ID</span><strong>{user.studentId}</strong></div><div><span>COURSE</span><strong>{user.course}</strong></div><div><span>YEAR</span><strong>{user.year}</strong></div><div><span>ACCOUNT</span><strong>Demo profile</strong></div></div><p className="profile-note">This profile is sample data stored in the React app. It is not connected to a university database.</p></div></section></div>;
}

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('Dashboard');
  if (!user) return <Login onLogin={setUser}/>;
  return <AppShell user={user} page={page} setPage={setPage} onLogout={()=>{setUser(null);setPage('Dashboard')}}>{page==='Profile'?<Profile user={user}/>:<Dashboard user={user} setPage={setPage}/>}</AppShell>;
}

createRoot(document.getElementById('root')).render(<App/>);
