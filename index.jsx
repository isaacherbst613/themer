import { useEffect, useState } from 'react';
import {useNudgeVisibleX} from './useIsVisible';
import './theme.css';
import Icon from './color-lens.svg';
import defaultThemes from './defaults.json';

const Themer = ({ icon, customThemes, overrideDefaults, onChoose }) => {
    const [show, setShow] = useState(false);
    const [containerRef, setContainerRef] = useState(null);

    useNudgeVisibleX({ root: document.body, element: containerRef });

    //onClick outside close
    useEffect(() => {
        document.addEventListener('click', () => setShow(false));
        return () => {
            document.removeEventListener('click', () => setShow(false));
        }
    }, []);

    return (<>
        <div onClick={e => { e.stopPropagation(); setShow(s => !s) }}>
            <span className='icon_wrapper'>
                {icon ? icon : <img src={Icon} alt='icon' />}
            </span>
            {show && <div className='theme_wrapper' ref={setContainerRef} onClick={e => e.stopPropagation()}>
                <div className='defualt_colors'>
                    <div className='title'>Themes</div>
                    <div className='colors_wrapper'>
                        {!overrideDefaults && defaultThemes.map(t => (
                            <Color
                                key={t.name}
                                onClick={() => {
                                    onChoose({ ...t });
                                    setShow(false)
                                }}
                                {...t}
                            />
                        ))}
                        {customThemes?.map(t => (
                            <Color
                                key={t.name}
                                onClick={() => {
                                    onChoose({ ...t });
                                    setShow(false)
                                }}
                                {...t}
                            />
                        ))}
                    </div>
                </div>
            </div>}
        </div>
    </>
    )
}
export default Themer;

const Color = ({ name, primary, secondary, contrast, onClick }) => {
    return (
        <div
            tabIndex={0}
            className='color_ball_wrapper'
            onClick={onClick}
            onKeyDown={({ key }) => key === 'Enter' && onClick()}
        >
            <div className='colorBall'>
                <span style={{ backgroundColor: primary }}></span>
                <span style={{ backgroundColor: secondary }}></span>
                <span style={{ backgroundColor: contrast }}></span>
            </div>
            <div className='colorLabel'>{name}</div>
        </div>
    )
}