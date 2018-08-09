# Prerequisites
 1. Nginx
 2. Apache(optional)

## CREATING a PASSWORD FILE
 - `sudo sh -c "echo -n 'sammy:' >> /etc/nginx/.htpasswd"`
 - `encrypting password file`
   1. `sudo sh -c "openssl passwd -apr1 >> /etc/nginx/.htpasswd"`
   2. `cat /etc/nginx/.htpasswd`


## USE APACHE UTILS FOR HTPASSWD cmd 
 - `sudo apt-get install apache2-utils`
 - `sudo htpasswd -c /etc/nginx/.htpasswd sammy`  
   1. `prompt for password`

# CONFIGURE NGINX FOR AUTH
  
  - `sudo nano /etc/nginx/sites-enabled/default`
  - `add following lines inside location`<br>
    `auth_basic "Restricted Content";`<br>
    `auth_basic_user_file /etc/nginx/.htpasswd;`

