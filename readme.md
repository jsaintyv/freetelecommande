Petite application Node JS pour remplacer la télécommande de ma Freebox.
![Telecommande](exemple.png?raw=true)


# Pour installer l'application
En ligne de commande sous Linux
```
git clone https://github.com/jsaintyv/freetelecommande.git
npm install
```

Modifier le fichier config.js pour renseigner le mot de passe de la telecommande free


Vous pouvez lancer l'application via:
```
npm start
```

# Installer en service via systemd
Editez un nouveau fichier /etc/systemd/system/freetelecommande.service
```
[Unit]
Description=Freetelecommande

[Service]
Environment=NODE_PORT=3000
Restart=always
Type=simple
User=pi
WorkingDirectory=/home/pi/freetelecommande
ExecStart=/usr/bin/npm start
Restart=on-failure

[Install]
WantedBy=default.target

```

Enregistrer le service
```
sudo systemctl enable freetelecommande.service
```


