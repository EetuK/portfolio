pipeline {
  agent any
  stages {
    stage('docker-compose') {
      steps {
        sh 'docker stop portfolio'
        sh 'docker rm portfolio'
        sh 'docker-compose -f docker-compose-prod.yml up -d'
      }
    }
  }
}