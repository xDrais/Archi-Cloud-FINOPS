# 1) Create a Recovery Services Vault

![alt text](1.png)

# 2) Configure Backup for Virtual Machines

![alt text](2.png)

## a) Select Virtual Machines for Backup

![alt text](3.png)

## b) Configure Backup Policy

![alt text](4.png)

#### You can either use the default policy or create a new custom policy.

#### Default Policy:
- Backs up daily and retains daily recovery points for 30 days.

#### Custom Policy: 
- Set the Frequency (daily or weekly backups).

- Configure Retention settings (how long to keep daily, weekly, monthly, or yearly backups).

# 3) Configure Backup for Azure Files

## a) Create an Azure File Share

####  Go to Storage accounts and select an existing storage account or create a new one

#### Inside the storage account, click File shares and create a new file share.

![alt text](5.png)

#### Once the storage account is created, we can now create the file share

![alt text](6.png)

![alt text](7.png)

#### now we can upload our files to the backup of the fileshare

![alt text](8.png)

#### Don't forget to do an initial backup to be able to find the backup 

![alt text](11.png)

## b) Configure Backup for Azure Files

![alt text](9.png)

![alt text](10.png)

![alt text](12.png)

# 4) Perform a Backup and Restore Operation

## a) Perform a Backup

### all our backedup and protected items

![alt text](13.png)

![alt text](14.png)

## b) Restore Operation

![alt text](15.png)

![alt text](16.png)

![alt text](17.png)

# 5) Implement Backup Policies and Retention

## a) Modify or Create Backup Policies

![alt text](18.png)

![alt text](19.png)

## b) Assign Backup Policy

![alt text](20.png)

![alt text](21.png)

![alt text](22.png)