pipeline {
  agent any
  stages {
    stage('docker-compose') {
      steps {
        sh 'sudo docker-compose -f docker-compose-prod.yml up -d'
      }
    }
  }
}