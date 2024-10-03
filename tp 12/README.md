# 1) Write an ARM Template to Deploy a Multi-Tier Application

#### A typical multi-tier app consists of:

- A frontend (e.g., web server).
- A backend (e.g., database server).

#### we will start by creating an ARM template structure that deploys:

- A Virtual Network (VNet).
- A Network Security Group (NSG) with rules.
- Two Virtual Machines (VMs) — one for the web tier and one for the database tier.
- Optionally, an Azure Database resource.

# 2) Parameterize the template for reusability.

#### VM Size Parameter:

- The vmSize parameter now defaults to Standard_B1ls, which is one of the smallest available VM sizes in Azure.

#### Admin Credentials:

- Set adminUsername to yassin and adminPassword to Facto92235152!. These credentials will be used for both the web and database VMs.

#### Network Configuration:

Two subnets are created within a single VNet:
- webSubnet: For the web server.
- dbSubnet: For the database server.

Both subnets are within the same Virtual Network, so they can communicate with each other.

#### Location:

- The region is set to France Central by default

#### VM Image:

- The VM image is set to Ubuntu 22.04 LTS (22_04-lts version), which is suitable for many modern applications.

# 3)  Deploy resources using the template via Azure CLI

```
az group create --name myResourceGroup --location "France Central"

az deployment group create --resource-group myResourceGroup --template-file multi-tier-app.json

```




#### CLI return

```
amri [ ~ ]$ az group create --name myResourceGroup --location "France Central"
{
  "id": "/subscriptions/07d858c2-b311-4b92-a38c-442e2cc8946b/resourceGroups/myResourceGroup",
  "location": "francecentral",
  "managedBy": null,
  "name": "myResourceGroup",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null,
  "type": "Microsoft.Resources/resourceGroups"
}
```


# 4) Validate and Troubleshoot Deployment Issues

#### Common Validation Issues:

- Invalid template structure: Ensure all required fields are present (like type, name, properties).

- Parameter errors: Check the allowed values in parameters.

- Networking issues: Ensure the VMs are correctly assigned to the subnets and network interfaces.

#### Azure CLI Validation
Before deploying, you can validate the template using

```
az deployment group validate --resource-group myResourceGroup --template-file multi-tier-app.json --parameters adminUsername=yassin adminPassword=Facto92235152!

```

```
az deployment group create --resource-group myResourceGroup --template-file multi-tier-app.json --what-if
```