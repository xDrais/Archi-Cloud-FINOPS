import logging
import json
import azure.functions as func
from azure.storage.blob import BlobServiceClient
import os
import time

# Get connection string from environment variables
connection_string = os.getenv('AzureWebJobsStorage')

# Initialize Blob Service Client
blob_service_client = BlobServiceClient.from_connection_string(connection_string)

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing HTTP request for logging...')

    try:
        log_data = req.get_json()
        level = log_data.get('level')

        container_name = 'logs-error' if level == 'ERROR' else 'logs-success'

        blob_name = f"log-{int(time.time())}.json"

        container_client = blob_service_client.get_container_client(container_name)

        blob_client = container_client.get_blob_client(blob_name)
        blob_client.upload_blob(json.dumps(log_data))

        return func.HttpResponse(f"Log stored in {container_name}: {blob_name}", status_code=200)

    except Exception as e:
        logging.error(f"Error processing log: {e}")
        return func.HttpResponse(f"Error storing log: {str(e)}", status_code=500)
