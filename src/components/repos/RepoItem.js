import React from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
    return (
        <div className="card">
            <h3>
                <a target="_blank" href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
};

RepoItem.protoTypes = {
    repo: PropTypes.object.isRequired
}
