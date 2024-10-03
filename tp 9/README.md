# 1) Deploy Azure Load Balancer

## a) Create a new resources groupe

![alt text](1.png)

## b) Create VM we need at least 2 to use the load balancing for traffic disstribution and make sure they are under the same Vnet so we won't need to configure a network peering or create a new Vnet before creating the VMs because azure doesnt allow you to change it after the deployment of the VMs

![alt text](6.png)

![alt text](7.png)

### In case our VM is created without a public ip we can assign one to it 

![alt text](3.png)

### Connect to the VMs using ssh to Install a Web Server (NGINX for linux and IIS (Internet Information Services) for windows)

![alt text](3.png)

```
sudo apt update
sudo apt install nginx -y
```

## c) Deploy Azure Load Balancer

#### we need to assign a Frontend IP configuration (FrontIpConfig) and Assign a Public IP address or create a new one (lbPublicIP)

![alt text](4.png)

## d) Configure Backend Pool

![alt text](8.png)

![alt text](9.png)

#### We need to select the Virtual Network that has both VMs in it and for the ip configuration we add both VMs IPs

![alt text](10.png)

#### don't forget to select the added IPs and save

![alt text](11.png)

# 2) Configure health probes and load balancing rules

## a) Configure health probes

![alt text](12.png)

![alt text](13.png)

## b) load balancing rules

![alt text](14.png)

![alt text](15.png)

# 3) Set up Azure Traffic Manager for DNS-based traffic routing

## a) Create an Azure Traffic Manager Profile 

![alt text](16.png)

![alt text](17.png)

## b) Add Endpoints to Traffic Manager

![alt text](18.png)

![alt text](19.png)

#### "No DNS name is configured" means that the public IP selected (lbPublicIP) does not have a DNS name associated with it yet. Azure Traffic Manager can still use the IP address for traffic routing, so this message does not affect the functionality of the lab

#### In case we cant add the endpoint we need to configure the DNS for the public Ip address

![alt text](20.png)

![alt text](21.png)

# 4) Test Failover Scenarios

#### We need to add an inbound rule to allow traffic from port 80 for http

![alt text](22.png)

![alt text](24.png)

![alt text](23.png)


#### Test Traffic Manager:
You can change the routing method in Traffic Manager to test different scenarios (e.g., Performance, Priority, Failover).

Test DNS-based routing by using the Traffic Manager DNS name (which will distribute traffic based on routing rules).