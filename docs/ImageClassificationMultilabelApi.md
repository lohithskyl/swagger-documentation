# SkylaiApiDocumentation.ImageClassificationMultilabelApi

All URIs are relative to *http://api.skyl.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectFormPost**](ImageClassificationMultilabelApi.md#apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectFormPost) | **POST** /api/organisations/{org_id}/projects/{project_id}/data-sets/{dataset_id}/collect-form | Collects data based upon template and uploads to dataset by form
[**apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectPost**](ImageClassificationMultilabelApi.md#apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectPost) | **POST** /api/organisations/{org_id}/projects/{project_id}/data-sets/{dataset_id}/collect | Collects data based upon template and uploads to dataset
[**apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferenceBatchPost**](ImageClassificationMultilabelApi.md#apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferenceBatchPost) | **POST** /api/organisations/{org_id}/projects/{project_id}/ml-models/{ml_model_id}/inference-batch | Inferences data in batch based upon template.
[**apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferencePost**](ImageClassificationMultilabelApi.md#apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferencePost) | **POST** /api/organisations/{org_id}/projects/{project_id}/ml-models/{ml_model_id}/inference | Inferences data based upon template.

<a name="apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectFormPost"></a>
# **apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectFormPost**
> apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectFormPost(orgId, projectId, datasetId)

Collects data based upon template and uploads to dataset by form

Collects data based upon template and uploads to dataset by form

### Example
```javascript
import SkylaiApiDocumentation from 'skylai_api_documentation';
let defaultClient = SkylaiApiDocumentation.ApiClient.instance;

// Configure API key authorization: project_access_token
let project_access_token = defaultClient.authentications['project_access_token'];
project_access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//project_access_token.apiKeyPrefix = 'Token';

// Configure API key authorization: project_id
let project_id = defaultClient.authentications['project_id'];
project_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//project_id.apiKeyPrefix = 'Token';

let apiInstance = new SkylaiApiDocumentation.ImageClassificationMultilabelApi();
let orgId = "orgId_example"; // String | unique id of the organisation
let projectId = "projectId_example"; // String | unique id of the project
let datasetId = "datasetId_example"; // String | unique id of the dataset

apiInstance.apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectFormPost(orgId, projectId, datasetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **String**| unique id of the organisation | 
 **projectId** | **String**| unique id of the project | 
 **datasetId** | **String**| unique id of the dataset | 

### Return type

null (empty response body)

### Authorization

[project_access_token](../README.md#project_access_token), [project_id](../README.md#project_id)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectPost"></a>
# **apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectPost**
> apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectPost(bodyorgIdprojectIddatasetId)

Collects data based upon template and uploads to dataset

Collects data based upon template and uploads to dataset

### Example
```javascript
import SkylaiApiDocumentation from 'skylai_api_documentation';
let defaultClient = SkylaiApiDocumentation.ApiClient.instance;

// Configure API key authorization: project_access_token
let project_access_token = defaultClient.authentications['project_access_token'];
project_access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//project_access_token.apiKeyPrefix = 'Token';

// Configure API key authorization: project_id
let project_id = defaultClient.authentications['project_id'];
project_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//project_id.apiKeyPrefix = 'Token';

let apiInstance = new SkylaiApiDocumentation.ImageClassificationMultilabelApi();
let body = new SkylaiApiDocumentation.Body(); // Body | body for the collect request, varies based on template
let orgId = "orgId_example"; // String | unique id of the organisation
let projectId = "projectId_example"; // String | unique id of the project
let datasetId = "datasetId_example"; // String | unique id of the dataset

apiInstance.apiOrganisationsOrgIdProjectsProjectIdDataSetsDatasetIdCollectPost(bodyorgIdprojectIddatasetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| body for the collect request, varies based on template | 
 **orgId** | **String**| unique id of the organisation | 
 **projectId** | **String**| unique id of the project | 
 **datasetId** | **String**| unique id of the dataset | 

### Return type

null (empty response body)

### Authorization

[project_access_token](../README.md#project_access_token), [project_id](../README.md#project_id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferenceBatchPost"></a>
# **apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferenceBatchPost**
> apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferenceBatchPost(orgId, projectId, mlModelId)

Inferences data in batch based upon template.

Collects data in batch  based upon template and uploads to dataset

### Example
```javascript
import SkylaiApiDocumentation from 'skylai_api_documentation';
let defaultClient = SkylaiApiDocumentation.ApiClient.instance;

// Configure API key authorization: project_access_token
let project_access_token = defaultClient.authentications['project_access_token'];
project_access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//project_access_token.apiKeyPrefix = 'Token';

// Configure API key authorization: project_id
let project_id = defaultClient.authentications['project_id'];
project_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//project_id.apiKeyPrefix = 'Token';

let apiInstance = new SkylaiApiDocumentation.ImageClassificationMultilabelApi();
let orgId = "orgId_example"; // String | unique id of the organisation
let projectId = "projectId_example"; // String | unique id of the project
let mlModelId = "mlModelId_example"; // String | unique id of the ml model

apiInstance.apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferenceBatchPost(orgId, projectId, mlModelId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **String**| unique id of the organisation | 
 **projectId** | **String**| unique id of the project | 
 **mlModelId** | **String**| unique id of the ml model | 

### Return type

null (empty response body)

### Authorization

[project_access_token](../README.md#project_access_token), [project_id](../README.md#project_id)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferencePost"></a>
# **apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferencePost**
> apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferencePost(bodyorgIdprojectIdmlModelId)

Inferences data based upon template.

Inferences data based upon template.

### Example
```javascript
import SkylaiApiDocumentation from 'skylai_api_documentation';
let defaultClient = SkylaiApiDocumentation.ApiClient.instance;

// Configure API key authorization: project_access_token
let project_access_token = defaultClient.authentications['project_access_token'];
project_access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//project_access_token.apiKeyPrefix = 'Token';

// Configure API key authorization: project_id
let project_id = defaultClient.authentications['project_id'];
project_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//project_id.apiKeyPrefix = 'Token';

let apiInstance = new SkylaiApiDocumentation.ImageClassificationMultilabelApi();
let body = new SkylaiApiDocumentation.Body2(); // Body2 | body for the inference request
let orgId = "orgId_example"; // String | unique id of the organisation
let projectId = "projectId_example"; // String | unique id of the project
let mlModelId = "mlModelId_example"; // String | unique id of the ml model

apiInstance.apiOrganisationsOrgIdProjectsProjectIdMlModelsMlModelIdInferencePost(bodyorgIdprojectIdmlModelId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)| body for the inference request | 
 **orgId** | **String**| unique id of the organisation | 
 **projectId** | **String**| unique id of the project | 
 **mlModelId** | **String**| unique id of the ml model | 

### Return type

null (empty response body)

### Authorization

[project_access_token](../README.md#project_access_token), [project_id](../README.md#project_id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

