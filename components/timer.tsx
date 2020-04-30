import * as React from 'react';

export default () => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const start = Date.now();
    let timerId: number;
    const loop = () => {
      timerId = requestAnimationFrame(()=>{
        setTime(Date.now() - start);
        return loop();
      });
    };
    loop();
    return() => {cancelAnimationFrame(timerId);};
  }, [])
  return (<>{time}ms</>)
}