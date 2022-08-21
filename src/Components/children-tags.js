import React, {Component} from 'react';

class ChildrenTags extends Component {
    render() {
        return (
            <div>
                <div className="tag-children ">
                    <div className="children">
                        <span className="tag-parent-name ">Локация:</span>
                        <div className="tags ">
                            <div className="tag-wrapper">
                                <span className="tag-name tag">Локация</span>
                                <button className="tag-delete"></button>
                            </div>

                        </div>
                    </div>

                    <div className="children">
                        <span className="tag-parent-name ">Локация:</span>
                        <div className="tags ">
                            <div className="tag-wrapper">
                                <span className="tag-name tag">Локация</span>
                                <button className="tag-delete"></button>
                            </div>

                        </div>
                    </div>
                    <div className="children">
                        <span className="tag-parent-name ">Локация:</span>
                        <div className="tags ">
                            <div className="tag-wrapper">
                                <span className="tag-name tag">Локация</span>
                                <button className="tag-delete"></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChildrenTags;