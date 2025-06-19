import React from 'react';

const Card = ({h1, p, github, deploy}) => {
return (
<div className='card-image' style={{
 position: 'relative',
 overflow: 'hidden',
 background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5), rgba(30, 58, 138, 0.3))',
 backdropFilter: 'blur(8px)',
 border: '1px solid rgba(34, 211, 238, 0.2)',
 borderRadius: '12px',
 padding: '24px',
 transition: 'all 0.3s ease',
 transform: 'translateY(0)',
 boxShadow: '0 0 0 rgba(34, 211, 238, 0)',
 height: '320px',
 width: '100%',
 maxWidth: '280px',
 boxSizing: 'border-box',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'space-between'
 }}
onMouseEnter={(e) => {
e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.4)';
e.currentTarget.style.transform = 'translateY(-6px)';
e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 211, 238, 0.15)';
 }}
onMouseLeave={(e) => {
e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.2)';
e.currentTarget.style.transform = 'translateY(0)';
e.currentTarget.style.boxShadow = '0 0 0 rgba(34, 211, 238, 0)';
 }}>
 
 <div style={{
 position: 'absolute',
 inset: '0',
 opacity: '0.08',
 backgroundImage: `linear-gradient(rgba(93, 187, 211, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(93, 187, 211, 0.1) 1px, transparent 1px)`,
 backgroundSize: '24px 24px',
 transition: 'opacity 0.5s ease'
 }}></div>
 
 <div style={{
 position: 'absolute',
 top: '0',
 right: '0',
 width: '60px',
 height: '60px',
 background: 'linear-gradient(225deg, rgba(34, 211, 238, 0.15), transparent)',
 borderRadius: '0 12px 0 100%',
 opacity: '0.7'
 }}></div>
 
 <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", position: 'relative', zIndex: '10', marginBottom: '4px'}} className='top'>
 <div className="left">
 <img style={{
 height:"2rem",
 filter: 'brightness(0) invert(1)',
 opacity: '0.85',
 transition: 'all 0.3s ease'
 }} src="/images/folder.png"/>
 </div>
 <div className='right' style={{display: 'flex', gap: '14px'}}>
 <span style={{position: 'relative'}}>
 <a href={github} style={{
 color: '#94a3b8',
 fontSize: '16px',
 textDecoration: 'none',
 transition: 'all 0.3s ease',
 display: 'inline-block',
 padding: '4px'
 }}
onMouseEnter={(e) => {
 e.target.style.color = '#22d3ee';
 e.target.style.transform = 'scale(1.1)';
}}
onMouseLeave={(e) => {
 e.target.style.color = '#94a3b8';
 e.target.style.transform = 'scale(1)';
}}>
 <i className="fa-brands fa-github"></i>
 </a>
 </span>
 <span style={{position: 'relative'}}>
 <a href={deploy} style={{
 color: '#94a3b8',
 fontSize: '16px',
 textDecoration: 'none',
 transition: 'all 0.3s ease',
 display: 'inline-block',
 padding: '4px'
 }}
onMouseEnter={(e) => {
 e.target.style.color = '#22d3ee';
 e.target.style.transform = 'scale(1.1)';
}}
onMouseLeave={(e) => {
 e.target.style.color = '#94a3b8';
 e.target.style.transform = 'scale(1)';
}}>
 <i className="fa-solid fa-arrow-up-right-from-square"></i>
 </a>
 </span>
 </div>
 </div>
 
 <div style={{flex: '1', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: '10'}}>
 <h4 style={{
 color:"#5dbbd3",
 fontWeight:"700",
 fontSize: '18px',
 position: 'relative',
 transition: 'color 0.3s ease',
 margin: '16px 0 8px 0',
 lineHeight: '1.3',
 wordBreak: 'break-word',
 overflow: 'hidden',
 display: '-webkit-box',
 WebkitLineClamp: '2',
 WebkitBoxOrient: 'vertical'
 }} className='mt-4'>
 {h1}
 <div style={{
 position: 'absolute',
 bottom: '-2px',
 left: '0',
 width: '0',
 height: '2px',
 background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
 transition: 'width 0.4s ease'
 }}></div>
 </h4>
 
 <p style={{
 color: '#cbd5e1',
 lineHeight: '1.5',
 margin: '0 0 auto 0',
 transition: 'color 0.3s ease',
 fontSize: '13px',
 wordBreak: 'break-word',
 overflow: 'hidden',
 display: '-webkit-box',
 WebkitLineClamp: '4',
 WebkitBoxOrient: 'vertical',
 opacity: '0.9'
 }}>{p}</p>
 </div>
 
 <div style={{
 display:"flex", 
 gap:"8px", 
 color:"aqua", 
 position: 'relative', 
 zIndex: '10', 
 flexWrap: 'wrap',
 marginTop: '16px',
 paddingTop: '12px',
 borderTop: '1px solid rgba(34, 211, 238, 0.1)'
 }} className='stack'>
 <span style={{
 position: 'relative',
 padding: '3px 8px',
 background: 'rgba(22, 78, 99, 0.25)',
 border: '1px solid rgba(34, 211, 238, 0.25)',
 borderRadius: '16px',
 fontSize: '11px',
 transition: 'all 0.3s ease',
 cursor: 'default',
 whiteSpace: 'nowrap',
 fontWeight: '500'
 }}
onMouseEnter={(e) => {
e.target.style.background = 'rgba(31, 81, 99, 0.35)';
e.target.style.borderColor = 'rgba(34, 211, 238, 0.4)';
e.target.style.transform = 'translateY(-1px)';
 }}
onMouseLeave={(e) => {
e.target.style.background = 'rgba(22, 78, 99, 0.25)';
e.target.style.borderColor = 'rgba(34, 211, 238, 0.25)';
e.target.style.transform = 'translateY(0)';
 }}>
 <span style={{textDecoration:"underline"}}>Node</span>
 </span>
 <span style={{
 position: 'relative',
 padding: '3px 8px',
 background: 'rgba(22, 78, 99, 0.25)',
 border: '1px solid rgba(34, 211, 238, 0.25)',
 borderRadius: '16px',
 fontSize: '11px',
 transition: 'all 0.3s ease',
 cursor: 'default',
 whiteSpace: 'nowrap',
 fontWeight: '500'
 }}
onMouseEnter={(e) => {
e.target.style.background = 'rgba(31, 81, 99, 0.35)';
e.target.style.borderColor = 'rgba(34, 211, 238, 0.4)';
e.target.style.transform = 'translateY(-1px)';
 }}
onMouseLeave={(e) => {
e.target.style.background = 'rgba(22, 78, 99, 0.25)';
e.target.style.borderColor = 'rgba(34, 211, 238, 0.25)';
e.target.style.transform = 'translateY(0)';
 }}>
 <span style={{textDecoration:"underline"}}>Express</span>
 </span>
 <span style={{
 position: 'relative',
 padding: '3px 8px',
 background: 'rgba(22, 78, 99, 0.25)',
 border: '1px solid rgba(34, 211, 238, 0.25)',
 borderRadius: '16px',
 fontSize: '11px',
 transition: 'all 0.3s ease',
 cursor: 'default',
 whiteSpace: 'nowrap',
 fontWeight: '500'
 }}
onMouseEnter={(e) => {
e.target.style.background = 'rgba(31, 81, 99, 0.35)';
e.target.style.borderColor = 'rgba(34, 211, 238, 0.4)';
e.target.style.transform = 'translateY(-1px)';
 }}
onMouseLeave={(e) => {
e.target.style.background = 'rgba(22, 78, 99, 0.25)';
e.target.style.borderColor = 'rgba(34, 211, 238, 0.25)';
e.target.style.transform = 'translateY(0)';
 }}>
 <span style={{textDecoration:"underline"}}>Mongodb</span>
 </span>
 </div>
 </div>
 );
};

export default Card;