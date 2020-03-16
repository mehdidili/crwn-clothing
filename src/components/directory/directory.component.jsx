import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import '../directory/directory.styles.scss';
import { connect } from 'react-redux';
import { SelectDirectorySections } from './directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => {
 
    return (
        <div className='directory-menu'>
            {
            sections.map(({id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps}/>
            )

            )
            }
        </div>
    );
    
}

const mapStateToProps = createStructuredSelector({
  sections: SelectDirectorySections
});

export default connect(mapStateToProps)(Directory);