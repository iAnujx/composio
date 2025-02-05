// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type { ClientAuthControllerIdentifyClientData, ClientAuthControllerIdentifyClientError, ClientAuthControllerIdentifyClientResponse, ClientAuthControllerTrackClientData, ClientAuthControllerTrackClientError, ClientAuthControllerTrackClientResponse, ClientAuthControllerSendMagicLinkData, ClientAuthControllerSendMagicLinkError, ClientAuthControllerSendMagicLinkResponse, ClientAuthControllerLogoutError, ClientAuthControllerLogoutResponse, ClientAuthControllerVerifyMagicLinkData, ClientAuthControllerVerifyMagicLinkError, ClientAuthControllerVerifyMagicLinkResponse, ClientAuthControllerGetUserInfoError, ClientAuthControllerGetUserInfoResponse, ClientAuthControllerPusherUserAuthData, ClientAuthControllerPusherUserAuthError, ClientAuthControllerPusherUserAuthResponse, ClientAuthControllerDeleteClientData, ClientAuthControllerDeleteClientError, ClientAuthControllerDeleteClientResponse, TeamControllerInviteMemberData, TeamControllerInviteMemberError, TeamControllerInviteMemberResponse, TeamControllerListMembersError, TeamControllerListMembersResponse, TeamControllerRemoveMemberData, TeamControllerRemoveMemberError, TeamControllerRemoveMemberResponse, ApiKeysControllerGenerateApiKeyData, ApiKeysControllerGenerateApiKeyError, ApiKeysControllerGenerateApiKeyResponse, ApiKeysControllerListApiKeysError, ApiKeysControllerListApiKeysResponse, ApiKeysControllerDeleteApiKeyData, ApiKeysControllerDeleteApiKeyError, ApiKeysControllerDeleteApiKeyResponse, AppControllerGetAppsData, AppControllerGetAppsError, AppControllerGetAppsResponse, AppControllerAddOpenApiSpecData, AppControllerAddOpenApiSpecError, AppControllerAddOpenApiSpecResponse, AppControllerGetOpenaApiSpecsError, AppControllerGetOpenaApiSpecsResponse, AppControllerDeleteOpenApiSpecToolData, AppControllerDeleteOpenApiSpecToolError, AppControllerDeleteOpenApiSpecToolResponse, AppControllerGetOpenApiSpecLogsData, AppControllerGetOpenApiSpecLogsError, AppControllerGetOpenApiSpecLogsResponse, AppControllerAddCustomRepoData, AppControllerAddCustomRepoError, AppControllerAddCustomRepoResponse, AppControllerGetAppData, AppControllerGetAppError, AppControllerGetAppResponse, AppControllerSyncAppsError, AppControllerSyncAppsResponse, AppControllerGetCustomRepoError, AppControllerGetCustomRepoResponse, AppConnectorControllerCreateConnectorData, AppConnectorControllerCreateConnectorError, AppConnectorControllerCreateConnectorResponse, AppConnectorControllerListGlobalConnectorsError, AppConnectorControllerListGlobalConnectorsResponse, AppConnectorControllerGetConnectorInfoData, AppConnectorControllerGetConnectorInfoError, AppConnectorControllerGetConnectorInfoResponse, AppConnectorControllerPatchConnectorData, AppConnectorControllerPatchConnectorError, AppConnectorControllerPatchConnectorResponse, AppConnectorControllerDeleteConnectorData, AppConnectorControllerDeleteConnectorError, AppConnectorControllerDeleteConnectorResponse, AppConnectorControllerPatchPostConnectorData, AppConnectorControllerPatchPostConnectorError, AppConnectorControllerPatchPostConnectorResponse, ActionsControllerV1ListActionsData, ActionsControllerV1ListActionsError, ActionsControllerV1ListActionsResponse, ActionsControllerV1ExecuteActionData, ActionsControllerV1ExecuteActionError, ActionsControllerV1ExecuteActionResponse, ActionsControllerV1ExecuteActionProxyData, ActionsControllerV1ExecuteActionProxyError, ActionsControllerV1ExecuteActionProxyResponse, ActionsControllerV1GetActionData, ActionsControllerV1GetActionError, ActionsControllerV1GetActionResponse, ConnectionsControllerGetConnectionsData, ConnectionsControllerGetConnectionsError, ConnectionsControllerGetConnectionsResponse, ConnectionsControllerInitiateConnectionData, ConnectionsControllerInitiateConnectionError, ConnectionsControllerInitiateConnectionResponse, ConnectionsControllerGetConnectionData, ConnectionsControllerGetConnectionError, ConnectionsControllerGetConnectionResponse, ConnectionsControllerDeleteConnectionData, ConnectionsControllerDeleteConnectionError, ConnectionsControllerDeleteConnectionResponse, ConnectionsControllerDisableConnectionData, ConnectionsControllerDisableConnectionError, ConnectionsControllerDisableConnectionResponse, ConnectionsControllerEnableConnectionData, ConnectionsControllerEnableConnectionError, ConnectionsControllerEnableConnectionResponse, AppLoginControllerHandleOauth2CallbackData, AppLoginControllerHandleOauth2CallbackError, AppLoginControllerHandleOauth2CallbackResponse, AppLoginControllerVerifyOauth2LoginData, AppLoginControllerVerifyOauth2LoginError, AppLoginControllerVerifyOauth2LoginResponse, TriggersControllerListTriggersData, TriggersControllerListTriggersError, TriggersControllerListTriggersResponse, TriggersControllerHandleTriggerData, TriggersControllerHandleTriggerError, TriggersControllerHandleTriggerResponse, TriggersControllerEnableTriggerData, TriggersControllerEnableTriggerError, TriggersControllerEnableTriggerResponse, TriggersControllerGetTriggerData, TriggersControllerGetTriggerError, TriggersControllerGetTriggerResponse, TriggersControllerGetActiveTriggersData, TriggersControllerGetActiveTriggersError, TriggersControllerGetActiveTriggersResponse, TriggersControllerSwitchTriggerInstanceStatusData, TriggersControllerSwitchTriggerInstanceStatusError, TriggersControllerSwitchTriggerInstanceStatusResponse, TriggersControllerSwitchPostTriggerInstanceStatusData, TriggersControllerSwitchPostTriggerInstanceStatusError, TriggersControllerSwitchPostTriggerInstanceStatusResponse, TriggersControllerDisableTriggerData, TriggersControllerDisableTriggerError, TriggersControllerDisableTriggerResponse, TriggersControllerDeleteTriggerData, TriggersControllerDeleteTriggerError, TriggersControllerDeleteTriggerResponse, TriggersControllerSetCallbackUrlData, TriggersControllerSetCallbackUrlError, TriggersControllerSetCallbackUrlResponse, TriggersControllerSetCallbackUrl1Data, TriggersControllerSetCallbackUrl1Error, TriggersControllerSetCallbackUrl1Response, TriggersControllerGetWebhookUrlError, TriggersControllerGetWebhookUrlResponse, TriggersControllerGetLogsData, TriggersControllerGetLogsError, TriggersControllerGetLogsResponse, TriggersControllerHandlePusherEventsData, TriggersControllerHandlePusherEventsError, TriggersControllerHandlePusherEventsResponse, AdminControllerSentryDnsError, AdminControllerSentryDnsResponse, CliControllerHandleCliCodeExchangeError, CliControllerHandleCliCodeExchangeResponse, CliControllerGetCliCodeData, CliControllerGetCliCodeError, CliControllerGetCliCodeResponse, CliControllerHandleCliCodeVerificationData, CliControllerHandleCliCodeVerificationError, CliControllerHandleCliCodeVerificationResponse, MetadataControllerGetMetadataData, MetadataControllerGetMetadataError, MetadataControllerGetMetadataResponse, MetadataControllerUpdateMetadataData, MetadataControllerUpdateMetadataError, MetadataControllerUpdateMetadataResponse, MetadataControllerToggleTriggerStateData, MetadataControllerToggleTriggerStateError, MetadataControllerToggleTriggerStateResponse, MetadataControllerGetToggleInfoError, MetadataControllerGetToggleInfoResponse, LogsControllerGetLogsData, LogsControllerGetLogsError, LogsControllerGetLogsResponse, ActionsControllerV2ListActionsData, ActionsControllerV2ListActionsError, ActionsControllerV2ListActionsResponse, ActionsControllerV2ExecuteActionData, ActionsControllerV2ExecuteActionError, ActionsControllerV2ExecuteActionResponse, ActionsControllerV2ExecuteActionProxyData, ActionsControllerV2ExecuteActionProxyError, ActionsControllerV2ExecuteActionProxyResponse, GetConnectionInfoData, GetConnectionInfoResponse, GetConnectionInfoError, GetAuthParamsData, GetAuthParamsResponse, GetAuthParamsError } from './types.gen';

export const client = createClient(createConfig({
    throwOnError: true
}));

export class ClientAuthService {
    /**
     * Identify client
     */
    public static identifyClient<ThrowOnError extends boolean = true>(options?: Options<ClientAuthControllerIdentifyClientData, ThrowOnError>) {
        return (options?.client ?? client).post<ClientAuthControllerIdentifyClientResponse, ClientAuthControllerIdentifyClientError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/identify'
        });
    }
    
    /**
     * Track client
     */
    public static trackClient<ThrowOnError extends boolean = true>(options?: Options<ClientAuthControllerTrackClientData, ThrowOnError>) {
        return (options?.client ?? client).post<ClientAuthControllerTrackClientResponse, ClientAuthControllerTrackClientError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/track'
        });
    }
    
    /**
     * Send magic link
     */
    public static sendMagicLink<ThrowOnError extends boolean = true>(options?: Options<ClientAuthControllerSendMagicLinkData, ThrowOnError>) {
        return (options?.client ?? client).post<ClientAuthControllerSendMagicLinkResponse, ClientAuthControllerSendMagicLinkError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/send_magic_link'
        });
    }
    
    /**
     * Logout API
     * Logout the user and clear the server side session
     */
    public static logout<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).post<ClientAuthControllerLogoutResponse, ClientAuthControllerLogoutError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/logout'
        });
    }
    
    /**
     * Verify magic link
     */
    public static verifyMagicLink<ThrowOnError extends boolean = true>(options?: Options<ClientAuthControllerVerifyMagicLinkData, ThrowOnError>) {
        return (options?.client ?? client).post<ClientAuthControllerVerifyMagicLinkResponse, ClientAuthControllerVerifyMagicLinkError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/verify_magic_link'
        });
    }
    
    /**
     * Get user info
     */
    public static getUserInfo<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<ClientAuthControllerGetUserInfoResponse, ClientAuthControllerGetUserInfoError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/client_info'
        });
    }
    
    /**
     * Pusher user auth
     */
    public static pusherUserAuth<ThrowOnError extends boolean = true>(options?: Options<ClientAuthControllerPusherUserAuthData, ThrowOnError>) {
        return (options?.client ?? client).post<ClientAuthControllerPusherUserAuthResponse, ClientAuthControllerPusherUserAuthError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/pusher_auth'
        });
    }
    
    /**
     * Delete client
     */
    public static deleteClient<ThrowOnError extends boolean = true>(options: Options<ClientAuthControllerDeleteClientData, ThrowOnError>) {
        return (options?.client ?? client).delete<ClientAuthControllerDeleteClientResponse, ClientAuthControllerDeleteClientError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/delete/{clientId}'
        });
    }
    
}

export class TeamService {
    /**
     * Invite member
     */
    public static inviteMember<ThrowOnError extends boolean = true>(options?: Options<TeamControllerInviteMemberData, ThrowOnError>) {
        return (options?.client ?? client).post<TeamControllerInviteMemberResponse, TeamControllerInviteMemberError, ThrowOnError>({
            ...options,
            url: '/api/v1/team/invite'
        });
    }
    
    /**
     * List members
     */
    public static listMembers<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<TeamControllerListMembersResponse, TeamControllerListMembersError, ThrowOnError>({
            ...options,
            url: '/api/v1/team/members'
        });
    }
    
    /**
     * Remove member
     */
    public static removeMember<ThrowOnError extends boolean = true>(options: Options<TeamControllerRemoveMemberData, ThrowOnError>) {
        return (options?.client ?? client).delete<TeamControllerRemoveMemberResponse, TeamControllerRemoveMemberError, ThrowOnError>({
            ...options,
            url: '/api/v1/team/members/{id}'
        });
    }
    
}

export class ApiKeysService {
    /**
     * Generate api key
     */
    public static generateApiKey<ThrowOnError extends boolean = true>(options: Options<ApiKeysControllerGenerateApiKeyData, ThrowOnError>) {
        return (options?.client ?? client).post<ApiKeysControllerGenerateApiKeyResponse, ApiKeysControllerGenerateApiKeyError, ThrowOnError>({
            ...options,
            url: '/api/v1/api_keys'
        });
    }
    
    /**
     * List api keys
     */
    public static listApiKeys<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<ApiKeysControllerListApiKeysResponse, ApiKeysControllerListApiKeysError, ThrowOnError>({
            ...options,
            url: '/api/v1/api_keys'
        });
    }
    
    /**
     * Delete api key
     */
    public static deleteApiKey<ThrowOnError extends boolean = true>(options: Options<ApiKeysControllerDeleteApiKeyData, ThrowOnError>) {
        return (options?.client ?? client).delete<ApiKeysControllerDeleteApiKeyResponse, ApiKeysControllerDeleteApiKeyError, ThrowOnError>({
            ...options,
            url: '/api/v1/api_keys/{id}'
        });
    }
    
}

export class AppService {
    /**
     * Get apps
     * Retrieve a list of all applications based on query parameters.
     */
    public static getApps<ThrowOnError extends boolean = true>(options?: Options<AppControllerGetAppsData, ThrowOnError>) {
        return (options?.client ?? client).get<AppControllerGetAppsResponse, AppControllerGetAppsError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps'
        });
    }
    
    /**
     * Add open api spec
     * Add openapi spec tool
     */
    public static addOpenApiSpec<ThrowOnError extends boolean = true>(options?: Options<AppControllerAddOpenApiSpecData, ThrowOnError>) {
        return (options?.client ?? client).post<AppControllerAddOpenApiSpecResponse, AppControllerAddOpenApiSpecError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/openapi/spec/add'
        });
    }
    
    /**
     * Get opena api specs
     */
    public static getOpenaApiSpecs<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<AppControllerGetOpenaApiSpecsResponse, AppControllerGetOpenaApiSpecsError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/openapi/spec/list'
        });
    }
    
    /**
     * Delete open api spec tool
     */
    public static deleteOpenApiSpecTool<ThrowOnError extends boolean = true>(options?: Options<AppControllerDeleteOpenApiSpecToolData, ThrowOnError>) {
        return (options?.client ?? client).delete<AppControllerDeleteOpenApiSpecToolResponse, AppControllerDeleteOpenApiSpecToolError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/openapi/spec/delete'
        });
    }
    
    /**
     * Get open api spec logs
     */
    public static getOpenApiSpecLogs<ThrowOnError extends boolean = true>(options: Options<AppControllerGetOpenApiSpecLogsData, ThrowOnError>) {
        return (options?.client ?? client).get<AppControllerGetOpenApiSpecLogsResponse, AppControllerGetOpenApiSpecLogsError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/openapi/spec/logs/{name}'
        });
    }
    
    /**
     * Add custom repo
     */
    public static addCustomRepo<ThrowOnError extends boolean = true>(options?: Options<AppControllerAddCustomRepoData, ThrowOnError>) {
        return (options?.client ?? client).post<AppControllerAddCustomRepoResponse, AppControllerAddCustomRepoError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/custom-repo/add-repo'
        });
    }
    
    /**
     * Get app
     * Get app details
     */
    public static getApp<ThrowOnError extends boolean = true>(options: Options<AppControllerGetAppData, ThrowOnError>) {
        return (options?.client ?? client).get<AppControllerGetAppResponse, AppControllerGetAppError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/{appName}'
        });
    }
    
    /**
     * Sync apps
     * Sync custom repo
     */
    public static syncApps<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).post<AppControllerSyncAppsResponse, AppControllerSyncAppsError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/sync'
        });
    }
    
    /**
     * Get custom repo
     * Get custom repo
     */
    public static getCustomRepo<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<AppControllerGetCustomRepoResponse, AppControllerGetCustomRepoError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/custom-repo/get-repo'
        });
    }
    
}

export class AppConnectorService {
    /**
     * Create connector
     */
    public static createConnector<ThrowOnError extends boolean = true>(options?: Options<AppConnectorControllerCreateConnectorData, ThrowOnError>) {
        return (options?.client ?? client).post<AppConnectorControllerCreateConnectorResponse, AppConnectorControllerCreateConnectorError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations'
        });
    }
    
    /**
     * List global connectors
     */
    public static listGlobalConnectors<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<AppConnectorControllerListGlobalConnectorsResponse, AppConnectorControllerListGlobalConnectorsError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations'
        });
    }
    
    /**
     * Get connector info
     */
    public static getConnectorInfo<ThrowOnError extends boolean = true>(options: Options<AppConnectorControllerGetConnectorInfoData, ThrowOnError>) {
        return (options?.client ?? client).get<AppConnectorControllerGetConnectorInfoResponse, AppConnectorControllerGetConnectorInfoError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations/{integrationId}'
        });
    }
    
    /**
     * Patch connector
     */
    public static patchConnector<ThrowOnError extends boolean = true>(options: Options<AppConnectorControllerPatchConnectorData, ThrowOnError>) {
        return (options?.client ?? client).patch<AppConnectorControllerPatchConnectorResponse, AppConnectorControllerPatchConnectorError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations/{integrationId}'
        });
    }
    
    /**
     * Delete connector
     */
    public static deleteConnector<ThrowOnError extends boolean = true>(options: Options<AppConnectorControllerDeleteConnectorData, ThrowOnError>) {
        return (options?.client ?? client).delete<AppConnectorControllerDeleteConnectorResponse, AppConnectorControllerDeleteConnectorError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations/{integrationId}'
        });
    }
    
    /**
     * Patch post connector
     */
    public static patchPostConnector<ThrowOnError extends boolean = true>(options: Options<AppConnectorControllerPatchPostConnectorData, ThrowOnError>) {
        return (options?.client ?? client).post<AppConnectorControllerPatchPostConnectorResponse, AppConnectorControllerPatchPostConnectorError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations/{integrationId}/status'
        });
    }
    
}

export class ActionsControllerV1Service {
    /**
     * List actions
     */
    public static v1ListActions<ThrowOnError extends boolean = true>(options?: Options<ActionsControllerV1ListActionsData, ThrowOnError>) {
        return (options?.client ?? client).get<ActionsControllerV1ListActionsResponse, ActionsControllerV1ListActionsError, ThrowOnError>({
            ...options,
            url: '/api/v1/actions'
        });
    }
    
    /**
     * Execute action
     */
    public static v1ExecuteAction<ThrowOnError extends boolean = true>(options: Options<ActionsControllerV1ExecuteActionData, ThrowOnError>) {
        return (options?.client ?? client).post<ActionsControllerV1ExecuteActionResponse, ActionsControllerV1ExecuteActionError, ThrowOnError>({
            ...options,
            url: '/api/v1/actions/{actionId}/execute'
        });
    }
    
    /**
     * Execute action proxy
     */
    public static v1ExecuteActionProxy<ThrowOnError extends boolean = true>(options?: Options<ActionsControllerV1ExecuteActionProxyData, ThrowOnError>) {
        return (options?.client ?? client).post<ActionsControllerV1ExecuteActionProxyResponse, ActionsControllerV1ExecuteActionProxyError, ThrowOnError>({
            ...options,
            url: '/api/v1/actions/proxy'
        });
    }
    
    /**
     * Get action
     */
    public static v1GetAction<ThrowOnError extends boolean = true>(options: Options<ActionsControllerV1GetActionData, ThrowOnError>) {
        return (options?.client ?? client).get<ActionsControllerV1GetActionResponse, ActionsControllerV1GetActionError, ThrowOnError>({
            ...options,
            url: '/api/v1/actions/{actionId}'
        });
    }
    
}

export class ConnectionsService {
    /**
     * Get connections
     */
    public static getConnections<ThrowOnError extends boolean = true>(options?: Options<ConnectionsControllerGetConnectionsData, ThrowOnError>) {
        return (options?.client ?? client).get<ConnectionsControllerGetConnectionsResponse, ConnectionsControllerGetConnectionsError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts'
        });
    }
    
    /**
     * Initiate connection
     */
    public static initiateConnection<ThrowOnError extends boolean = true>(options?: Options<ConnectionsControllerInitiateConnectionData, ThrowOnError>) {
        return (options?.client ?? client).post<ConnectionsControllerInitiateConnectionResponse, ConnectionsControllerInitiateConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts'
        });
    }
    
    /**
     * Get connection
     */
    public static getConnection<ThrowOnError extends boolean = true>(options: Options<ConnectionsControllerGetConnectionData, ThrowOnError>) {
        return (options?.client ?? client).get<ConnectionsControllerGetConnectionResponse, ConnectionsControllerGetConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}'
        });
    }

    /**
     * Get connection info
     */
    public static getConnectionInfo<ThrowOnError extends boolean = true>(options: Options<GetConnectionInfoData, ThrowOnError>) {
        return (options?.client ?? client).get<GetConnectionInfoResponse, GetConnectionInfoError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}/info'
        });
    }
    
    /**
     * Delete connection
     */
    public static deleteConnection<ThrowOnError extends boolean = true>(options: Options<ConnectionsControllerDeleteConnectionData, ThrowOnError>) {
        return (options?.client ?? client).delete<ConnectionsControllerDeleteConnectionResponse, ConnectionsControllerDeleteConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}'
        });
    }
    
    public static getAuthParams<ThrowOnError extends boolean = true>(options: Options<GetAuthParamsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetAuthParamsResponse, GetAuthParamsError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}/info'
        });
    }
    public static disableConnection<ThrowOnError extends boolean = true>(options: Options<ConnectionsControllerDisableConnectionData, ThrowOnError>) {
        return (options?.client ?? client).post<ConnectionsControllerDisableConnectionResponse, ConnectionsControllerDisableConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}/disable'
        });
    }
    
    /**
     * Enable connection
     */
    public static enableConnection<ThrowOnError extends boolean = true>(options: Options<ConnectionsControllerEnableConnectionData, ThrowOnError>) {
        return (options?.client ?? client).post<ConnectionsControllerEnableConnectionResponse, ConnectionsControllerEnableConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}/enable'
        });
    }
    
}

export class AppLoginService {
    /**
     * Handle o auth 2 callback
     */
    public static handleOauth2Callback<ThrowOnError extends boolean = true>(options: Options<AppLoginControllerHandleOauth2CallbackData, ThrowOnError>) {
        return (options?.client ?? client).get<AppLoginControllerHandleOauth2CallbackResponse, AppLoginControllerHandleOauth2CallbackError, ThrowOnError>({
            ...options,
            url: '/api/v1/login/{appName}/auth'
        });
    }
    
    /**
     * Verify o auth 2 login
     */
    public static verifyOauth2Login<ThrowOnError extends boolean = true>(options: Options<AppLoginControllerVerifyOauth2LoginData, ThrowOnError>) {
        return (options?.client ?? client).get<AppLoginControllerVerifyOauth2LoginResponse, AppLoginControllerVerifyOauth2LoginError, ThrowOnError>({
            ...options,
            url: '/api/v1/login/{appName}/callback'
        });
    }
    
}

export class TriggersService {
    /**
     * List triggers
     * List triggers
     */
    public static listTriggers<ThrowOnError extends boolean = true>(options?: Options<TriggersControllerListTriggersData, ThrowOnError>) {
        return (options?.client ?? client).get<TriggersControllerListTriggersResponse, TriggersControllerListTriggersError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers'
        });
    }
    
    /**
     * Handle trigger
     */
    public static handleTrigger<ThrowOnError extends boolean = true>(options: Options<TriggersControllerHandleTriggerData, ThrowOnError>) {
        return (options?.client ?? client).post<TriggersControllerHandleTriggerResponse, TriggersControllerHandleTriggerError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/handle/{appName}/{clientId}'
        });
    }
    
    /**
     * Enable trigger
     * Enables a trigger for a connected account and specific trigger name.
     */
    public static enableTrigger<ThrowOnError extends boolean = true>(options: Options<TriggersControllerEnableTriggerData, ThrowOnError>) {
        return (options?.client ?? client).post<TriggersControllerEnableTriggerResponse, TriggersControllerEnableTriggerError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/enable/{connectedAccountId}/{triggerName}'
        });
    }
    
    /**
     * Get trigger
     * Retrieves a specific trigger by its ID.
     */
    public static getTrigger<ThrowOnError extends boolean = true>(options: Options<TriggersControllerGetTriggerData, ThrowOnError>) {
        return (options?.client ?? client).get<TriggersControllerGetTriggerResponse, TriggersControllerGetTriggerError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/get/{triggerId}'
        });
    }
    
    /**
     * Get active triggers
     * Lists active triggers based on query parameters.
     */
    public static getActiveTriggers<ThrowOnError extends boolean = true>(options?: Options<TriggersControllerGetActiveTriggersData, ThrowOnError>) {
        return (options?.client ?? client).get<TriggersControllerGetActiveTriggersResponse, TriggersControllerGetActiveTriggersError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/active_triggers'
        });
    }
    
    /**
     * Switch trigger instance status
     * Switches the status of a trigger instance.
     */
    public static switchTriggerInstanceStatus<ThrowOnError extends boolean = true>(options: Options<TriggersControllerSwitchTriggerInstanceStatusData, ThrowOnError>) {
        return (options?.client ?? client).patch<TriggersControllerSwitchTriggerInstanceStatusResponse, TriggersControllerSwitchTriggerInstanceStatusError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/instance/{triggerId}/status'
        });
    }
    
    /**
     * Switch post trigger instance status
     * Switches the status of a trigger instance.
     */
    public static switchPostTriggerInstanceStatus<ThrowOnError extends boolean = true>(options: Options<TriggersControllerSwitchPostTriggerInstanceStatusData, ThrowOnError>) {
        return (options?.client ?? client).post<TriggersControllerSwitchPostTriggerInstanceStatusResponse, TriggersControllerSwitchPostTriggerInstanceStatusError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/instance/{triggerId}/status'
        });
    }
    
    /**
     * Disable trigger
     * Disables a specified trigger instance.
     */
    public static disableTrigger<ThrowOnError extends boolean = true>(options: Options<TriggersControllerDisableTriggerData, ThrowOnError>) {
        return (options?.client ?? client).post<TriggersControllerDisableTriggerResponse, TriggersControllerDisableTriggerError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/disable/{triggerId}'
        });
    }
    
    /**
     * Delete trigger
     * Deletes a specified trigger instance.
     */
    public static deleteTrigger<ThrowOnError extends boolean = true>(options: Options<TriggersControllerDeleteTriggerData, ThrowOnError>) {
        return (options?.client ?? client).delete<TriggersControllerDeleteTriggerResponse, TriggersControllerDeleteTriggerError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/instance/{triggerInstanceId}'
        });
    }
    
    /**
     * Set callback url
     * Sets a universal callback URL for the client.
     */
    public static setCallbackUrl<ThrowOnError extends boolean = true>(options?: Options<TriggersControllerSetCallbackUrlData, ThrowOnError>) {
        return (options?.client ?? client).post<TriggersControllerSetCallbackUrlResponse, TriggersControllerSetCallbackUrlError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/setCallbackURL'
        });
    }
    
    /**
     * Set callback url
     * Sets a universal callback URL for the client, ensuring it is updated in the system.
     */
    public static setCallbackUrl1<ThrowOnError extends boolean = true>(options?: Options<TriggersControllerSetCallbackUrl1Data, ThrowOnError>) {
        return (options?.client ?? client).post<TriggersControllerSetCallbackUrl1Response, TriggersControllerSetCallbackUrl1Error, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/set_callback_url'
        });
    }
    
    /**
     * Get webhook url
     * Retrieves the universal callback URL set for the client.
     */
    public static getWebhookUrl<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<TriggersControllerGetWebhookUrlResponse, TriggersControllerGetWebhookUrlError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/callback_url'
        });
    }
    
    /**
     * Get logs
     * Fetches logs based on connection and integration details.
     */
    public static getLogs<ThrowOnError extends boolean = true>(options?: Options<TriggersControllerGetLogsData, ThrowOnError>) {
        return (options?.client ?? client).get<TriggersControllerGetLogsResponse, TriggersControllerGetLogsError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/logs'
        });
    }
    
    /**
     * Handle pusher events
     */
    public static handlePusherEvents<ThrowOnError extends boolean = true>(options?: Options<TriggersControllerHandlePusherEventsData, ThrowOnError>) {
        return (options?.client ?? client).post<TriggersControllerHandlePusherEventsResponse, TriggersControllerHandlePusherEventsError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/pusher'
        });
    }
    
}

export class AdminService {
    /**
     * Sentry dns
     */
    public static sentryDns<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<AdminControllerSentryDnsResponse, AdminControllerSentryDnsError, ThrowOnError>({
            ...options,
            url: '/api/v1/cli/sentry-dns'
        });
    }
    
}

export class CliService {
    /**
     * Handle cli code exchange
     */
    public static handleCliCodeExchange<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<CliControllerHandleCliCodeExchangeResponse, CliControllerHandleCliCodeExchangeError, ThrowOnError>({
            ...options,
            url: '/api/v1/cli/generate-cli-session'
        });
    }
    
    /**
     * Get cli code
     */
    public static getCliCode<ThrowOnError extends boolean = true>(options: Options<CliControllerGetCliCodeData, ThrowOnError>) {
        return (options?.client ?? client).get<CliControllerGetCliCodeResponse, CliControllerGetCliCodeError, ThrowOnError>({
            ...options,
            url: '/api/v1/cli/get-cli-code'
        });
    }
    
    /**
     * Handle cli code verification
     */
    public static handleCliCodeVerification<ThrowOnError extends boolean = true>(options: Options<CliControllerHandleCliCodeVerificationData, ThrowOnError>) {
        return (options?.client ?? client).get<CliControllerHandleCliCodeVerificationResponse, CliControllerHandleCliCodeVerificationError, ThrowOnError>({
            ...options,
            url: '/api/v1/cli/verify-cli-code'
        });
    }
    
}

export class MetadataService {
    /**
     * Get metadata
     */
    public static getMetadata<ThrowOnError extends boolean = true>(options: Options<MetadataControllerGetMetadataData, ThrowOnError>) {
        return (options?.client ?? client).get<MetadataControllerGetMetadataResponse, MetadataControllerGetMetadataError, ThrowOnError>({
            ...options,
            url: '/api/v1/metadata'
        });
    }
    
    /**
     * Update metadata
     */
    public static updateMetadata<ThrowOnError extends boolean = true>(options: Options<MetadataControllerUpdateMetadataData, ThrowOnError>) {
        return (options?.client ?? client).post<MetadataControllerUpdateMetadataResponse, MetadataControllerUpdateMetadataError, ThrowOnError>({
            ...options,
            url: '/api/v1/metadata'
        });
    }
    
    /**
     * Toggle trigger state
     */
    public static toggleTriggerState<ThrowOnError extends boolean = true>(options?: Options<MetadataControllerToggleTriggerStateData, ThrowOnError>) {
        return (options?.client ?? client).post<MetadataControllerToggleTriggerStateResponse, MetadataControllerToggleTriggerStateError, ThrowOnError>({
            ...options,
            url: '/api/v1/metadata/toggle/trigger'
        });
    }
    
    /**
     * Get toggle info
     */
    public static getToggleInfo<ThrowOnError extends boolean = true>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<MetadataControllerGetToggleInfoResponse, MetadataControllerGetToggleInfoError, ThrowOnError>({
            ...options,
            url: '/api/v1/metadata/toggle.info'
        });
    }
    
}

export class LogsService {
    /**
     * Get logs
     * List logs
     */
    public static getLogs<ThrowOnError extends boolean = true>(options?: Options<LogsControllerGetLogsData, ThrowOnError>) {
        return (options?.client ?? client).get<LogsControllerGetLogsResponse, LogsControllerGetLogsError, ThrowOnError>({
            ...options,
            url: '/api/v1/logs/'
        });
    }
    
}

export class ActionsControllerV2Service {
    /**
     * List actions
     * Retrieve a list of all actions based on query parameters.
     */
    public static v2ListActions<ThrowOnError extends boolean = true>(options?: Options<ActionsControllerV2ListActionsData, ThrowOnError>) {
        return (options?.client ?? client).get<ActionsControllerV2ListActionsResponse, ActionsControllerV2ListActionsError, ThrowOnError>({
            ...options,
            url: '/api/v2/actions'
        });
    }
    
    /**
     * Execute action
     * Execute an action. Support both connected account and no auth auth.
     */
    public static v2ExecuteAction<ThrowOnError extends boolean = true>(options: Options<ActionsControllerV2ExecuteActionData, ThrowOnError>) {
        return (options?.client ?? client).post<ActionsControllerV2ExecuteActionResponse, ActionsControllerV2ExecuteActionError, ThrowOnError>({
            ...options,
            url: '/api/v2/actions/{actionId}/execute'
        });
    }
    
    /**
     * Execute action proxy
     * Execute an action with direct auth.
     */
    public static v2ExecuteActionProxy<ThrowOnError extends boolean = true>(options?: Options<ActionsControllerV2ExecuteActionProxyData, ThrowOnError>) {
        return (options?.client ?? client).post<ActionsControllerV2ExecuteActionProxyResponse, ActionsControllerV2ExecuteActionProxyError, ThrowOnError>({
            ...options,
            url: '/api/v2/actions/proxy'
        });
    }
    
}