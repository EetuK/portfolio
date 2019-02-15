pipeline {
  agent any
  stages {
    stage('docker-compose') {
      steps {
        sh 'docker top portfolio && docker rm portfolio'
        sh 'docker top portfolio && docker rm portfolio'
        sh 'docker-compose -f docker-compose-prod.yml up -d'
      }
    }
  }
}