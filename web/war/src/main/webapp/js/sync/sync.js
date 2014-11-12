define([
    'flight/lib/component',
    'data',
    'util/withAsyncQueue'
], function(defineComponent, appData, withAsyncQueue) {
    'use strict';

    return defineComponent(Sync, withAsyncQueue);

    function Sync() {

        //PUT EVENTS YOU WANT TO SYNC HERE!
        this.events = [
            'addVertices',
            'updateVertices',
            'deleteVertices'
        ];

        this.after('initialize', function() {
            this.on(document, 'workspaceLoaded', this.onWorkspaceLoaded);
            this.on(document, 'socketMessage', this.onSocketMessage);

            this.on(document, 'onlineStatusChanged', this.onOnlineStatusChanged);

            for (var i in this.events) {
                this.on(document, this.events[i], this.onSyncedEvent);
            }

            this.setupAsyncQueue('users');
        });

        this.onWorkspaceLoaded = function(evt, workspace) {
            this.workspaceEditable = workspace.editable;
            this.currentWorkspaceId = workspace.workspaceId;

            this.usersReady(function(usersData) {
                var user = usersData.user,
                    data = {
                        type: 'changedWorkspace',
                        permissions: {
                        },
                        data: {
                            userId: user.id,
                            workspaceId: this.currentWorkspaceId
                        }
                    };
                this.syncService.socketPush(data);
            });
        };

        this.onSocketMessage = function(evt, message) {
            message.data = message.data || {};
            message.data.eventData = message.data.eventData || {};
            switch (message.type) {
                case 'sync':
                    console.debug(
                        'sync onSocketMessage (remote: ' +
                        (message.data.eventData.remoteEvent ? 'true' : 'false') + ')',
                        message
                    );
                    message.data.eventData.remoteEvent = true;
                    this.trigger(document, message.data.eventName, message.data.eventData);
                    break;
            }
        };

        this.onSyncedEvent = function(evt, data) {
            if (!this.currentWorkspaceId) {
                return;
            }
            if (!this.workspaceEditable && !data.remoteEvent) {
                return;
            }
            if (data.remoteEvent) {
                return;
            }

            if (data && data.vertices) {
                data.vertices = data.vertices.map(function(vertex) {
                    return {
                        id: vertex.id,
                        workspace: vertex.workspace
                    };
                });
            }

            this.syncService.publishWorkspaceSyncEvent(evt.type, this.currentWorkspaceId, data);
        };

        this.onOnlineStatusChanged = function(evt, data) {
            this.usersMarkReady(data);
            this.currentUser = data.user;
        };

    }

});
