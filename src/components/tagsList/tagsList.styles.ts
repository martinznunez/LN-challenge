const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      padding: '10px',
      fontSize: '15px',

    },
    tagItem: {
      display: 'inline-block',
      marginRight: '8px',
      position: 'relative',
    },
    link: {
      color: '#0074c4',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s, text-decoration 0.3s',
    },
    dot: {
      color: '#0074c4',
      fontWeight: 'normal',
      fontSize: '26px',
      position: 'absolute',
      right: '-10px',
      top: '10%',
      transform: 'translateY(-50%)',
    },
  };
  
  export default styles;
  