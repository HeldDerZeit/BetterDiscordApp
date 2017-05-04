/**
 * BetterDiscord Settings Panel Component
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
 */

'use strict';

const { React } = require('../../vendor');
import { Component } from 'React';
import CPluginCard from './pluginCard';

class CPluginPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let self = this;
        let { plugins } = self.props;
        window.pl = plugins;
        return (
            <div className="content-column default">
                <h2 className="ui-form-title h2 margin-reset margin-bottom-20">Plugins</h2>
                <div className="control-groups bd-plugins">
                    <div className="tab-bar TOP" style={{borderBottom: "none"}}>
                        <div className="tab-bar-item selected">Installed
                            <div className="bd-tab-refresh"></div>
                        </div>
                        <div className="tab-bar-item">Online
                            <div className="bd-tab-refresh"></div>
                        </div>
                    </div>
                    {plugins.map(plugin => {
                        return <CPluginCard key={plugin.name} plugin={plugin} />
                    })}
                    {plugins.map(plugin => {
                        return <CPluginCard key={plugin.name} plugin={plugin} />
                    })}
                    {plugins.map(plugin => {
                        return <CPluginCard key={plugin.name} plugin={plugin} />
                    })}
                    {plugins.map(plugin => {
                        return <CPluginCard key={plugin.name} plugin={plugin} />
                    })}
                    {plugins.map(plugin => {
                        return <CPluginCard key={plugin.name} plugin={plugin} />
                    })}
                </div>
            </div>
        );
    }
}

export default CPluginPanel;