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



# Dockeriser l'application
Dans le répertoire extrait de git.
```
docker build -t jsaintyv/freetelecommmande
```

Pour lancer
```
docker run -p 3000:3000 -t freetelecommande
```

Pour voir si elle fonctionne
```
docker ps
```

# Pour lancer l'application au démarrage sous Linux avec systemd
```
docker run -d --name=freetelecommande -p 3000:3000 jsaintyv/freetelecommmande
```

Editez un nouveau fichier /etc/systemd/system/freetelecommande.service
```
[Unit]
Description=Freetelecommande
Requires=docker.service
After=docker.service

[Service]
Restart=always
ExecStart=/usr/bin/docker start -a freetelecommande
ExecStop=/usr/bin/docker stop -t 2 freetelecommande

[Install]
WantedBy=default.target
```

Enregistrer le service
```
sudo systemctl enable freetelecommande.service
```


