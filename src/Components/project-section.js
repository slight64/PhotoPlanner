import React, {Component} from 'react';

class ProjectSection extends Component {
    render() {
        return (
            <div>
                <section className="project-section">
                    <div className="project-items">
                        <span className="project-items-count">2</span>
                        <p className="project-items-identification">Фото</p>
                    </div>
                    <div className="project-items-images">
                        <div className="project-item">
                            <img alt={''}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ProjectSection;