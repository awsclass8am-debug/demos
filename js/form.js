document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.target,n=document.getElementById('note'),v=k=>f[k].value.trim();
  if(!v('name')||!/^\S+@\S+\.\S+$/.test(v('email'))||!v('msg')){n.textContent='Please fill in your name, a valid email and a message.';return}
  const body=`Name: ${v('name')}\nEmail: ${v('email')}\nService: ${f.service.value}\n\n${v('msg')}`;
  location.href='mailto:connect@helpalot.help?subject='+encodeURIComponent('Project enquiry from '+v('name'))+'&body='+encodeURIComponent(body);
  n.textContent='Opening your email app to send the message...';
});
