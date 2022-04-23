import logoImg from '../assets/codeBrackets48.png';

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logoImg} alt='logo' />
      <p>devchallenges</p>
    </div>
  );
}

export default Logo;