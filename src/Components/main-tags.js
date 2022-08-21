import React, {Component} from 'react';
import styles from '../styles/main-tags.modul.css'

class MainTags extends Component {
    render() {
        return (
            <div className={styles.maintags}
                 className={styles.tags}            >
                <div className={styles.tagwrapper} className={styles.tagselect}>
                    <span className="section-tag tag ">Локация</span>
                </div>
                <div className="tagwrapper">
                    <span className="section-tag tag">Образ</span>
                </div>
                <div className="tagwrapper">
                    <span className="section-tag tag ">Поза</span>
                </div>
            </div>
        );
    }
}

export default MainTags;