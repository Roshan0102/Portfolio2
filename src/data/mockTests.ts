export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    correctAnswers?: number[];
    explanation: string;
}

export const awsCCPQuestions: Question[] = [
    {
        id: 1,
        text: "A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements",
        options: [
        "Amazon Elastic Kubernetes Service (Amazon EKS)",
        "AWS Fargate",
        "Amazon EC2",
        "Amazon Elastic Container Service (Amazon ECS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity to have full control over the underlying infrastructure (p. 1). With EC2, you launch instances and deploy containers on them using container orchestration tools like Docker or Kubernetes while retaining control over the configuration, scaling, and management of the underlying virtual servers (p. 1)."
    },
    {
        id: 2,
        text: "A company is planning to host its workloads on AWS. Which AWS service requires the company to update and patch the guest operating system?",
        options: [
        "Amazon DynamoDB",
        "Amazon S3",
        "Amazon EC2",
        "Amazon Aurora",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon EC2 (Elastic Compute Cloud) is the AWS service that provides resizable compute capacity in the cloud (p. 1). When you use EC2 instances, you have control over the guest operating system, and it is your responsibility to update and patch the operating system (p. 1)."
    },
    {
        id: 3,
        text: "A company is migrating its workloads to the AWS Cloud. The company must retain full control of patch management for guest operating systems that host its applications. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon DynamoDB",
        "Amazon EC2",
        "AWS Lambda",
        "Amazon RDS",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon EC2 (Elastic Compute Cloud) allows the company to retain full control over the guest operating systems, including patch management (p. 1). This level of control is suitable for scenarios where the company wants to manage the entire software stack, including the operating system (p. 1)."
    },
    {
        id: 4,
        text: "Which actions allow a system administrator to connect to an EC2 instance? (Choose two.)",
        options: [
        "Use Amazon EC2 Instance Connect",
        "Use a Remote Desktop Protocol (RDP) connection.",
        "Use AWS Batch.",
        "Use AWS Systems Manager Session Manager.",
        "Use Amazon Connect.",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: "Session Manager enables you to establish secure connections to your Amazon Elastic Compute Cloud (EC2) instances, edge devices, on-premises servers, and virtual machines (VMs) (p. 1). Amazon EC2 Instance Connect provides a simple and secure way to connect to your Linux instances with Secure Shell (SSH) (p. 1)."
    },
    {
        id: 5,
        text: "Which AWS service uses AWS Compute Optimizer to provide rightsizing recommendations based on workload metrics?",
        options: [
        "Amazon EC2",
        "Amazon S3",
        "Amazon Lightsail",
        "AWS Step Functions",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 6,
        text: "Which AWS compute service gives users the ability to securely and reliably run containers at scale?",
        options: [
        "Amazon Elastic Container Service (Amazon ECS)",
        "Amazon Aurora",
        "Amazon Athena",
        "Amazon Polly",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 7,
        text: "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster scheduling, and environment maintenance. Which AWS service meets these requirements?",
        options: [
        "AWS Lambda",
        "Amazon RDS",
        "AWS Fargate",
        "Amazon Athena",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Fargate is a technology that you use with Amazon ECS to run containers without having to manage servers or clusters of Amazon EC2 instances (p. 2)."
    },
    {
        id: 8,
        text: "Which of the following AWS services are serverless? (Choose two.)",
        options: [
        "AWS Outposts",
        "Amazon EC2",
        "Amazon Elastic Kubernetes Service (Amazon EKS)",
        "AWS Fargate",
        "AWS Lambda",
    ],
        correctAnswer: 3,
        correctAnswers: [3, 4],
        explanation: ""
    },
    {
        id: 9,
        text: "A company wants to migrate a company’s on-premises container infrastructure to the AWS Cloud. The company wants to prevent unplanned administration and operation cost and adapt to a serverless architecture. Which AWS service will meet these requirements?",
        options: [
        "Amazon Connect",
        "AWS Fargate",
        "Amazon Lightsail",
        "Amazon EC2",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 10,
        text: "Which AWS service provides serverless compute for use with containers?",
        options: [
        "Amazon Simple Queue Service (Amazon SQS)",
        "AWS Fargate",
        "AWS Elastic Beanstalk",
        "Amazon SageMaker",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 11,
        text: "A company wants to update its online data processing application by implementing container-based services that run for 4 hours at a time. The company does not want to provision or manage instances. Which AWS service will meet these requirements?",
        options: [
        "AWS Lambda",
        "AWS Fargate",
        "Amazon EC2",
        "AWS Elastic Beanstalk",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 12,
        text: "A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?",
        options: [
        "Amazon EC2",
        "AWS Elastic Beanstalk",
        "AWS CodeBuild",
        "Amazon Personalize",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Elastic Beanstalk is a fully managed service that simplifies the deployment of applications on AWS (p. 3). It abstracts the underlying infrastructure, allowing developers to quickly deploy applications without manual resource creation and is suitable for rapid application deployment (p. 3)."
    },
    {
        id: 13,
        text: "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
        options: [
        "AWS CloudFormation",
        "AWS Elastic Beanstalk",
        "Amazon EC2",
        "AWS OpsWorks",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 14,
        text: "A company needs to deploy applications in the AWS Cloud as quickly as possible. The company wants to minimize the complexity that is related to the management of AWS resources. Which AWS service should the company use to meet these requirements?",
        options: [
        "AWS Config",
        "AWS Elastic Beanstalk",
        "Amazon EC2",
        "Amazon Personalize",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Elastic Beanstalk is a fully managed service that makes it easy to deploy applications in multiple languages (p. 3). It abstracts away the underlying infrastructure, allowing developers to focus on writing code while AWS handles the deployment, capacity provisioning, load balancing, and automatic scaling (p. 3)."
    },
    {
        id: 15,
        text: "Which AWS service supports the deployment and management of applications in the AWS Cloud?",
        options: [
        "Amazon CodeGuru",
        "AWS Fargate",
        "AWS Elastic Beanstalk",
        "AWS CodeCommit",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Elastic Beanstalk helps you deploy and manage web applications with capacity provisioning, app health monitoring, and more (p. 4)."
    },
    {
        id: 16,
        text: "A company wants to deploy a non-containerized Java-based web application on AWS. The company wants a managed service to quickly deploy the application. The company wants the service to automatically provision capacity, load balance, scale, and monitor application health. Which AWS service will meet these requirements?",
        options: [
        "Amazon Elastic Container Service (Amazon ECS)",
        "AWS Lambda",
        "Amazon Elastic Kubernetes Service (Amazon EKS)",
        "AWS Elastic Beanstalk",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 17,
        text: "A company is using AWS for all its IT infrastructure. The company’s developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves. Which AWS service should the developers use to meet these requirements?",
        options: [
        "AWS CloudFormation",
        "AWS CodeBuild",
        "AWS Elastic Beanstalk",
        "AWS CodeDeploy",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 18,
        text: "A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources. Which AWS service will meet this requirement?",
        options: [
        "AWS Batch",
        "AWS Elastic Disaster Recovery",
        "AWS Backup",
        "Amazon FSx",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Backup is a fully managed backup service that makes it easy to centralize and automate the back up of data across AWS services in the cloud as well as on-premises (p. 4)."
    },
    {
        id: 19,
        text: "A company needs a fully managed service that centralizes and automates data protection across AWS services and hybrid workloads. Which AWS service will meet these requirements?",
        options: [
        "AWS Artifact",
        "AWS Backup",
        "AWS Batch",
        "AWS Shield",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 20,
        text: "A company has a centralized group of users with large file storage requirements that exceeded the space available on-premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?",
        options: [
        "Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.",
        "Configure and deploy an AWS Storage Gateway file gateway on-premises and present the file share to the users.",
        "Move the users working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.",
        "Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Using an AWS Storage Gateway file gateway allows you to extend your on-premises file storage into the AWS Cloud seamlessly (p. 5). It provides low latency access to your data stored in Amazon S3 while maintaining the performance benefits of local access (p. 5)."
    },
    {
        id: 21,
        text: "Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?",
        options: [
        "AWS DataSync",
        "Amazon S3 Glacier",
        "AWS Storage Gateway",
        "Amazon Elastic Block Store (Amazon EBS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Storage Gateway is a hybrid cloud storage service that enables on-premises applications to use cloud storage seamlessly (p. 5). It provides file, volume, and tape gateway interfaces to integrate on-premises environments with AWS Cloud storage (p. 5)."
    },
    {
        id: 22,
        text: "A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon Elastic Block Store (Amazon EBS)",
        "AWS Storage Gateway",
        "Amazon Elastic Container Service (Amazon ECS)",
        "AWS Lambda",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Storage Gateway is a hybrid cloud storage service that seamlessly integrates on-premises applications with cloud storage (p. 5). It supports various storage protocols, including Amazon S3 and Amazon Glacier, and allows on-premises data to be backed up to AWS without changing existing workflows (p. 5)."
    },
    {
        id: 23,
        text: "A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?",
        options: [
        "Tape Gateway",
        "Volume Gateway",
        "Amazon FSx File Gateway",
        "Amazon S3 File Gateway",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon S3 File Gateway supports a file interface into Amazon S3 and allows storing and retrieving objects in Amazon S3 using industry-standard file protocols such as NFS (p. 6)."
    },
    {
        id: 24,
        text: "A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?",
        options: [
        "AWS Storage Gateway",
        "AWS Snowcone",
        "AWS Backup",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Storage Gateway is a service that connects on-premises storage systems to AWS Cloud Storage Systems (p. 6). It offers several deployment options, including an option that provides locally cached Cloud Storage (p. 6)."
    },
    {
        id: 25,
        text: "A company has a physical tape library to store backups. The tape library is running out of space. The company needs to extend the tape library’s capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
        options: [
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon S3",
        "AWS Storage Gateway",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Storage Gateway connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between your on-premises IT environment and the AWS storage infrastructure (p. 6)."
    },
    {
        id: 26,
        text: "Which AWS service provides on-premises applications with low-latency access to data that is stored in the AWS Cloud?",
        options: [
        "Amazon CloudFront",
        "AWS Storage Gateway",
        "AWS Backup",
        "AWS DataSync",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 27,
        text: "Which AWS solution gives companies the ability to use protocols such as NFS to store and retrieve objects in Amazon S3?",
        options: [
        "Amazon FSx for Lustre",
        "AWS Storage Gateway volume gateway",
        "AWS Storage Gateway file gateway",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 28,
        text: "A company wants a fully managed Windows file server for its Windows-based applications. Which AWS service will meet this requirement?",
        options: [
        "Amazon FSx",
        "Amazon Elastic Kubernetes Service (Amazon EKS)",
        "Amazon Elastic Container Service (Amazon ECS)",
        "Amazon EMR",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon FSx is a fully managed file storage service that is compatible with Windows file servers (p. 7). It is designed to provide shared file storage for Windows-based applications (p. 7)."
    },
    {
        id: 29,
        text: "A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service meets these requirements?",
        options: [
        "Amazon S3",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon FSx for Windows File Server",
        "Amazon Elastic Block Store (Amazon EBS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon FSx for Windows File Server provides fully managed, highly reliable, and scalable file storage that is accessible over the industry-standard Server Message Block (SMB) protocol (p. 7)."
    },
    {
        id: 30,
        text: "A company wants to provide access to Windows file shares in AWS from its on-premises workloads. The company does not want to provision any additional infrastructure or applications in its data center. Which AWS service will meet these requirements?",
        options: [
        "Amazon FSx File Gateway",
        "AWS DataSync",
        "Amazon S3",
        "AWS Snow Family",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon FSx File Gateway optimizes on-premises access to fully managed, highly reliable file shares in Amazon FSx for Windows File Server (p. 7)."
    },
    {
        id: 31,
        text: "A company needs a fully managed file server that natively supports Microsoft workloads and file systems. The file server must also support the SMB protocol. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon FSx for Lustre",
        "Amazon FSx for Windows File Server",
        "Amazon Elastic Block Store (Amazon EBS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon FSx for Windows File Server is an AWS service that provides a fully managed file server that natively supports Microsoft workloads and file systems (p. 8)."
    },
    {
        id: 32,
        text: "Which AWS service allows for file sharing between multiple Amazon EC2 instances?",
        options: [
        "AWS Direct Connect",
        "AWS Snowball Edge",
        "AWS Backup",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 33,
        text: "A company needs a managed NFS file system that the company can use with its AWS compute resources. Which AWS service or feature will meet these requirements?",
        options: [
        "Amazon Elastic Block Store (Amazon EBS)",
        "AWS Storage Gateway Tape Gateway",
        "Amazon S3 Glacier Flexible Retrieval",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 34,
        text: "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
        options: [
        "EC2 Reserved Instances",
        "EC2 Amazon Machine Images (AMIs)",
        "Amazon Elastic Block Store (Amazon EBS) snapshots",
        "AWS Shield",
        "Amazon GuardDuty",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 2],
        explanation: "Creating AMIs (Amazon Machine Images) is a common practice for disaster recovery (p. 8). Amazon Elastic Block Store (Amazon EBS) snapshots enable you to create point-in-time copies of your EBS volumes and are often part of a disaster recovery strategy (p. 8)."
    },
    {
        id: 35,
        text: "Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?",
        options: [
        "AWS Support",
        "AWS customers",
        "AWS Key Management Service (AWS KMS)",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The customer has to select AWS KMS (p. 8)."
    },
    {
        id: 36,
        text: "A user needs to perform a one-time backup of an Amazon Elastic Block Store (Amazon EBS) volume that is attached to an Amazon EC2 instance. What is the MOST operationally efficient way to perform this backup?",
        options: [
        "Attach another EBS volume to the EC2 instance, and copy the contents",
        "Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect",
        "Create an EBS snapshot of the volume",
        "Create a custom script to copy the EBS file contents to Amazon S3",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 37,
        text: "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
        options: [
        "Use of the Snowball Edge appliance for a 10-day period",
        "The transfer of data out of Amazon S3 and to the Snowball Edge appliance",
        "Daily use of the Snowball Edge appliance after 10 days",
        "Storage on the Snowball Edge appliance",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 38,
        text: "A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?",
        options: [
        "S3 Lifecycle",
        "S3 Versioning",
        "S3 bucket policies",
        "S3 server-side encryption",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "S3 Versioning is a feature that allows you to preserve, retrieve, and restore every version of every object stored in a bucket (p. 9). Enabling versioning helps protect against accidental deletion or overwriting of data (p. 9)."
    },
    {
        id: 39,
        text: "A security engineer wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console. Which AWS service or resource will meet this requirement?",
        options: [
        "S3 Multi-Region Access Points",
        "S3 Storage Lens",
        "AWS IAM Identity Centre (AWS Single Sign-On)",
        "Access Analyzer for S3",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Access Analyzer for S3 is designed to review and analyze access policies for S3 buckets, providing insights into who has access to your buckets and how that access is granted (p. 10)."
    },
    {
        id: 40,
        text: "Which AWS service provides highly durable object storage?",
        options: [
        "Amazon S3",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon FSx",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon S3 (Simple Storage Service) provides highly durable object storage with 99.999999999% (11 9's) durability (p. 10)."
    },
    {
        id: 41,
        text: "A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?",
        options: [
        "Tape Gateway",
        "Volume Gateway",
        "Amazon FSx File Gateway",
        "Amazon S3 File Gateway",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon S3 File Gateway supports a file interface into Amazon S3 and allows storing and retrieving objects in Amazon S3 using industry-standard file protocols such as NFS (p. 10)."
    },
    {
        id: 42,
        text: "A company wants to store and retrieve files in Amazon S3 for its existing on-premises applications by using industry-standard file system protocols. Which AWS service will meet these requirements?",
        options: [
        "AWS DataSync",
        "AWS Snowball Edge",
        "Amazon S3 File Gateway",
        "AWS Transfer Family",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon S3 File Gateway provides a seamless way to connect to the cloud in order to store application data files and backup images as durable objects in Amazon S3 cloud storage (p. 10)."
    },
    {
        id: 43,
        text: "A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?",
        options: [
        "S3 Versioning",
        "S3 Transfer Acceleration",
        "S3 ACLs",
        "S3 Intelligent-Tiering",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "S3 Transfer Acceleration utilizes Amazon CloudFront’s globally distributed edge locations to accelerate the upload of objects to an S3 bucket (p. 11)."
    },
    {
        id: 44,
        text: "A company wants to query its server logs to gain insights about its customers' experiences. Which AWS service will store this data MOST cost-effectively?",
        options: [
        "Amazon Aurora",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon S3",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "For cost-effective storage and querying of large volumes of data, especially log data, Amazon S3 is the most suitable option (p. 11)."
    },
    {
        id: 45,
        text: "Which of the following describes the core functionality of Amazon S3?",
        options: [
        "Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2.",
        "Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability.",
        "Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-standard SMB protocol.",
        "Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 46,
        text: "A company is storing data in the AWS Cloud. If the company needs to access the data, data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?",
        options: [
        "S3 Standard",
        "S3 Glacier Flexible Retrieval",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "S3 Glacier Flexible Retrieval is designed for long-term archival of data that is infrequently accessed and where retrieval times of several hours are acceptable (p. 11). It is the most cost-effective storage class for data that is retained for months, years, or decades (p. 11)."
    },
    {
        id: 47,
        text: "Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)",
        options: [
        "Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)",
        "Server-side encryption with AWS KMS managed keys (SSE-KMS)",
        "TLS",
        "SSL",
        "Transparent Data Encryption (TDE)",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 1],
        explanation: "Amazon S3 now applies server-side encryption with Amazon S3 managed keys (SSE-S3) as the base level of encryption for every bucket (p. 12). You can choose to configure buckets to use server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS) instead (p. 12)."
    },
    {
        id: 48,
        text: "A company wants to store data in Amazon S3. The company rarely accesses the data, and the company can regenerate the data if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet these requirements?",
        options: [
        "S3 Standard",
        "S3 Intelligent-Tiering",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "The most cost-effective storage class would be S3 One Zone-Infrequent Access (S3 One Zone-IA) (p. 12). This storage class stores data in a single availability zone, providing cost savings compared to storage classes that store data redundantly across multiple availability zones (p. 12)."
    },
    {
        id: 49,
        text: "A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which S3 feature will meet this requirement?",
        options: [
        "S3 Versioning",
        "S3 Lifecycle",
        "S3 Object Lock",
        "S3 Inventory",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon S3 Lifecycle policies allow you to define rules to automatically transition objects between storage classes or delete them when they are no longer needed (p. 12)."
    },
    {
        id: 50,
        text: "A company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service will meet these requirements?",
        options: [
        "Amazon GuardDuty",
        "Amazon Detective",
        "Amazon Macie",
        "AWS Shield",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Macie can distinguish any personally identifiable information (PII) or protected health information (PHI) (p. 13)."
    },
    {
        id: 51,
        text: "Which Amazon S3 storage class is MOST cost-effective for unknown access patterns?",
        options: [
        "S3 Standard",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "S3 Intelligent-Tiering",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "S3 Intelligent-Tiering is the most cost-effective option for unknown access patterns (p. 13). It automatically moves objects between two access tiers (frequent and infrequent access) based on changing access patterns (p. 13)."
    },
    {
        id: 52,
        text: "A company wants durable storage for static content and infinitely scalable data storage infrastructure at the lowest cost. Which AWS service should the company choose?",
        options: [
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon S3",
        "AWS Storage Gateway",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon S3 is an object storage service designed to store and retrieve any amount of data from anywhere (p. 13). S3 offers industry leading durability, availability, performance, security, and virtually unlimited scalability at very low costs (p. 13)."
    },
    {
        id: 53,
        text: "A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data into comma-separated values (.csv) files. A developer wants to write a simple query that can read all of these files and generate a summary report. Which AWS service or feature should the developer use to meet these requirements with the LEAST amount of operational overhead?",
        options: [
        "Amazon S3 Select",
        "Amazon Athena",
        "Amazon Redshift",
        "Amazon EC2",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Athena is a serverless query service that allows you to analyze data directly in Amazon S3 using SQL queries (p. 13)."
    },
    {
        id: 54,
        text: "A company wants to track tags, buckets, and prefixes for its S3 objects. Which S3 feature will meet this requirement?",
        options: [
        "S3 Inventory report",
        "S3 Lifecycle",
        "S3 Versioning",
        "S3 ACLs",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "To keep track of objects and their respective tags, buckets, and prefixes, you can use an S3 Inventory report (p. 13)."
    },
    {
        id: 55,
        text: "What does the Amazon S3 Intelligent-Tiering storage class offer?",
        options: [
        "Payment flexibility by reserving storage capacity",
        "Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume",
        "Automatic cost savings by moving objects between tiers based on access pattern changes",
        "Secure, durable, and lowest cost storage for data archival",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon S3 Intelligent-Tiering is the only cloud storage class that delivers automatic storage cost savings when data access patterns change, without performance impact or operational overhead (p. 14)."
    },
    {
        id: 56,
        text: "Which Amazon S3 feature or storage class uses the AWS backbone network and edge locations to reduce latencies from the end user to Amazon S3?",
        options: [
        "S3 Cross-Region Replication",
        "S3 Transfer Acceleration",
        "S3 Event Notifications",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "S3 Transfer Acceleration is a feature of Amazon S3 that uses Amazon CloudFront's globally distributed edge locations to accelerate transfers of files to and from Amazon S3 buckets (p. 14)."
    },
    {
        id: 57,
        text: "A company wants to use a managed service to identify and protect sensitive data that is stored in Amazon S3. Which AWS service will meet these requirements?",
        options: [
        "AWS IAM Access Analyzer",
        "Amazon GuardDuty",
        "Amazon Inspector",
        "Amazon Macie",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 58,
        text: "A company stores a large amount of data that auditors access only twice each year. Which Amazon S3 storage class should the company use to store the data with the LOWEST cost?",
        options: [
        "Amazon S3 Outposts",
        "Amazon S3 Glacier Instant Retrieval",
        "S3 Standard",
        "Amazon S3 Intelligent-Tiering",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 59,
        text: "A company wants to store its files in the AWS Cloud. Users need to be able to download these files directly using a public URL. Which AWS service or feature will meet this requirement?",
        options: [
        "Amazon Redshift",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon S3",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 60,
        text: "A cloud engineer wants to store data in Amazon S3. The engineer will access some of the data yearly and some of the data daily. Which S3 storage class will meet these requirements MOST cost-effectively?",
        options: [
        "S3 Standard",
        "S3 Glacier Deep Archive",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "S3 Intelligent-Tiering",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "When access patterns change, S3 Intelligent-Tiering will optimize storage costs by automatically moving data to the most cost-effective storage tier (p. 15)."
    },
    {
        id: 61,
        text: "A company needs to store infrequently used data for data archives and long-term backups. Which AWS service or storage class will meet these requirements MOST cost-effectively?",
        options: [
        "Amazon FSx for Lustre",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon S3 Glacier Flexible Retrieval",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 62,
        text: "A company must archive its documents by using a write-once, read-many (WORM) mode to meet legal and compliance obligations. Which feature of Amazon S3 can the company use to meet this requirement?",
        options: [
        "S3 Versioning",
        "S3 bucket policy",
        "S3 Glacier Vault Lock",
        "S3 multi-factor authentication (MFA)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "By using S3 Glacier Vault Lock, the company can ensure that its archived documents are stored in a write-once, read-many (WORM) model, meeting legal and compliance obligations that require data immutability and retention for a specified period or indefinitely (p. 15)."
    },
    {
        id: 63,
        text: "A company needs to use SQL syntax to perform a direct query of objects in an Amazon S3 bucket. Which AWS service can the company use to meet this requirement?",
        options: [
        "AWS Glue",
        "Amazon Athena",
        "AWS Lambda",
        "Amazon Kinesis",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 64,
        text: "A company needs to use AWS technology to deploy a static website. Which solution meets this requirement with the LEAST amount of operational overhead?",
        options: [
        "Deploy the website on Amazon EC2.",
        "Host the website on AWS Elastic Beanstalk.",
        "Deploy the website with Amazon Lightsail",
        "Host the website on Amazon S3.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 65,
        text: "A company uses Amazon S3 to store audio files that are each 5 megabytes in size. The company will rarely access the files, but the company must be able to retrieve the files immediately. Which S3 storage class will meet these requirements MOST cost-effectively?",
        options: [
        "S3 Standard",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Deep Archive",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 66,
        text: "What is the total volume of data that can be stored in Amazon S3?",
        options: [
        "10 PB",
        "50 PB",
        "100 PB",
        "Virtually unlimited",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 67,
        text: "A company wants an Amazon S3 solution that provides access to object storage within single-digit milliseconds. Which solution will meet these requirements?",
        options: [
        "S3 Express One Zone",
        "S3 Standard",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Instant Retrieval",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
];

export const awsCCPQuestions2: Question[] = [
    {
        id: 1,
        text: "A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?",
        options: [
        "Amazon Connect",
        "AWS Wavelength",
        "AWS Regions",
        "AWS Direct Connect",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Regions are geographical locations where AWS data centers (Availability Zones) are situated. When deploying Amazon RDS, you can choose the AWS Region that is geographically closest to your current location to reduce latency and improve performance. (p. 1)"
    },
    {
        id: 2,
        text: "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
        options: [
        "Amazon DynamoDB",
        "Amazon Athena",
        "Amazon RDS",
        "Amazon EMR",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon RDS (Relational Database Service) provides managed database services, including PostgreSQL. It is suitable for online transaction processing (OLTP) workloads. (p. 2)"
    },
    {
        id: 3,
        text: "A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Choose two.)",
        options: [
        "Amazon Athena",
        "Amazon RDS",
        "Amazon EC2",
        "Amazon DynamoDB",
        "Amazon Aurora",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 4],
        explanation: "Amazon Aurora PostgreSQL is a fully managed, PostgreSQL-compatible database. In addition to the benefits of Aurora, Aurora PostgreSQL offers a convenient migration pathway from Amazon RDS into Aurora. (p. 3)"
    },
    {
        id: 4,
        text: "A user needs a relational database but does not have the resources to manage the hardware, resiliency, and replication. Which AWS service option meets the user's requirements?",
        options: [
        "Run MySQL on Amazon Elastic Container Service (Amazon ECS).",
        "Run MySQL on Amazon EC2.",
        "Choose Amazon RDS for MySQL",
        "Choose Amazon ElastiCache for Redis.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon RDS (Relational Database Service) is a fully managed relational database service that takes care of tasks such as hardware provisioning, database setup, patching, and backups. It provides a managed environment for various database engines, including MySQL. (p. 3)"
    },
    {
        id: 5,
        text: "Which task is the responsibility of a company that is using Amazon RDS?",
        options: [
        "Provision the underlying infrastructure.",
        "Create IAM policies to control administrative access to the service.",
        "Install the cables to connect the hardware for compute and storage.",
        "Install and patch the RDS operating system.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS automates time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups, allowing you to focus on your applications. (p. 4) The customer is responsible for managing access control via IAM policies. (p. 3)"
    },
    {
        id: 6,
        text: "Which feature of Amazon RDS provides the ability to automatically create a primary database instance and to synchronously replicate data to an instance in another Availability Zone?",
        options: [
        "Read replicas",
        "Blue/green deployment",
        "Multi-AZ deployment",
        "Reserved Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 7,
        text: "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
        options: [
        "Create an IAM user and provide AWS Management Console access only.",
        "Create an IAM user and provide programmatic access only.",
        "Create an IAM role and provide AWS Management Console access only.",
        "Create an IAM policy with administrator access and attach it to the IAM user.",
        "Create an IAM policy with Amazon RDS access and attach it to the IAM user.",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 4],
        explanation: ""
    },
    {
        id: 8,
        text: "A company has a MariaDB database on premises. The company wants to move the data to the AWS Cloud, Which AWS service will host this database with the LEAST amount of operational overhead?",
        options: [
        "Amazon RDS",
        "Amazon Neptune",
        "Amazon S3",
        "Amazon DynamoDB",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 9,
        text: "A company needs to deploy a PostgreSQL database into Amazon RDS. The database must be highly available and fault tolerant. Which AWS solution should the company use to meet these requirements?",
        options: [
        "Amazon RDS with a single Availability Zone",
        "Amazon RDS snapshots",
        "Amazon RDS with multiple Availability Zones",
        "AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 10,
        text: "A company uses Amazon RDS for a product database. The company wants to ensure the database is highly available. Which feature of Amazon RDS will meet this requirement?",
        options: [
        "Read replicas",
        "Blue/green deployment",
        "Multi-AZ deployment",
        "Reserved Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 11,
        text: "A company wants to run relationship databases in the AWS Cloud. The company wants to use a managed service that will install the database and run regular software updates. Which AWS service will meet these requirements?",
        options: [
        "Amazon S3",
        "Amazon RDS",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon DynamoDB",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 12,
        text: "A company wants to securely store Amazon RDS database credentials and automatically rotate user passwords periodically. Which AWS service or capability will meet these requirements?",
        options: [
        "Amazon S3",
        "AWS Systems Manager Parameter Store",
        "AWS Secrets Manager",
        "AWS CloudTrail",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 13,
        text: "A company wants to migrate its on-premises SQL Server database to the AWS Cloud. The company wants AWS to handle the day-to-day administration of the database. Which AWS service will meet the company's requirements?",
        options: [
        "Amazon EC2 for Microsoft SQL Server",
        "Amazon DynamoDB",
        "Amazon RDS",
        "Amazon Aurora",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 14,
        text: "A company has multiple SQL-based databases located in a data center. The company needs to migrate all database servers to the AWS Cloud to reduce the cost of operating physical servers. Which AWS service or resource will meet these requirements with the LEAST operational overhead?",
        options: [
        "Amazon EC2 instances",
        "Amazon RDS",
        "Amazon DynamoDB",
        "OpenSearch",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 15,
        text: "Which AWS service supports MySQL database engines?",
        options: [
        "Amazon Dynamo DB",
        "Amazon RDS",
        "Amazon DocumentDB (with MongoDB compatibility)",
        "Amazon ElastiCache",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 16,
        text: "A company wants to deploy an application that stores data in a relational database. The company wants database tasks, such as automated backups and database snapshots, to be managed by AWS. Which AWS service will meet these requirements?",
        options: [
        "Amazon DocumentDB",
        "Amazon RDS",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon S3",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 17,
        text: "Which of the following is a fully managed MySQL-compatible database?",
        options: [
        "Amazon S3",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Aurora",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon Aurora is a fully managed relational database engine compatible with MySQL and PostgreSQL. It offers the performance and availability of commercial databases with the simplicity and cost-effectiveness of open-source databases. (p. 8)"
    },
    {
        id: 18,
        text: "A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?",
        options: [
        "PostgreSQL on Amazon EC2",
        "Amazon RDS for PostgreSQL",
        "Amazon Aurora PostgreSQL-Compatible Edition",
        "Amazon Aurora Serverless",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon Aurora Serverless provides the highest level of automation and scalability as it is a serverless database solution. You don't have to worry about managing database instances, scaling, or maintenance. (p. 9)"
    },
    {
        id: 19,
        text: "Which AWS service is a relational database compatible with MySQL and PostgreSQL?",
        options: [
        "Amazon Redshift",
        "Amazon DynamoDB",
        "Amazon Aurora",
        "Amazon Neptune",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Aurora is a global-scale relational database service built for the cloud with full MySQL and PostgreSQL compatibility. (p. 9)"
    },
    {
        id: 20,
        text: "Which AWS services can host PostgreSQL databases? (Choose two.)",
        options: [
        "Amazon S3",
        "Amazon Aurora",
        "Amazon EC2",
        "Amazon OpenSearch Service",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 2],
        explanation: ""
    },
    {
        id: 21,
        text: "A company uses Amazon Aurora as its database service. The company wants to encrypt its databases and database backups. Which party manages the encryption of the database clusters and database snapshots, according to the AWS shared responsibility model?",
        options: [
        "AWS",
        "The company",
        "AWS Marketplace partners",
        "Third-party partners",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 22,
        text: "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?",
        options: [
        "Physical security of DynamoDB",
        "Patching of DynamoDB",
        "Access to DynamoDB tables",
        "Encryption of data at rest in DynamoDB",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "The customer is responsible for managing and controlling access to their DynamoDB tables. This includes defining appropriate permissions, user access control, and authentication mechanisms to ensure that only authorized users or services can access the tables. (p. 10)"
    },
    {
        id: 23,
        text: "To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?",
        options: [
        "Amazon Redshift",
        "Amazon Aurora",
        "Amazon DynamoDB",
        "Amazon RDS",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon DynamoDB can automatically scale throughput capacity based on the application's demand, making it a suitable choice for workloads with varying traffic patterns. (p. 11)"
    },
    {
        id: 24,
        text: "A company is using Amazon DynamoDB. Which task is the company's responsibility, according to the AWS shared responsibility model?",
        options: [
        "Patch the operating system.",
        "Provision hosts",
        "Manage database access permissions.",
        "Secure the operating system.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Managing database access permissions is the customer's responsibility. Customers are responsible for defining and managing access permissions to their DynamoDB tables. (p. 12)"
    },
    {
        id: 25,
        text: "Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?",
        options: [
        "Amazon DynamoDB",
        "Amazon Aurora",
        "Amazon DocumentDB (with MongoDB compatibility)",
        "Amazon Neptune",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon DynamoDB provides single-digit millisecond latency at any scale. It is a fully managed NoSQL database service designed for applications that require consistent, single-digit millisecond latency, regardless of the volume of requests. (p. 12)"
    },
    {
        id: 26,
        text: "A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
        options: [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Aurora",
        "Amazon Redshift",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "DynamoDB is a fully managed Non-relational database in AWS. (p. 13)"
    },
    {
        id: 27,
        text: "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
        options: [
        "Amazon Aurora",
        "Amazon DynamoDB",
        "Amazon RDS",
        "Amazon Redshift",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon DynamoDB is a serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale. (p. 14)"
    },
    {
        id: 28,
        text: "A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?",
        options: [
        "AWS Migration Hub",
        "AWS Database Migration Service (AWS DMS)",
        "Migration Evaluator",
        "AWS Application Migration Service",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS DMS helps to migrate databases to AWS quickly and securely. It supports various source and target databases, including NoSQL databases, making it suitable for migrating an on-premises NoSQL workload to Amazon DynamoDB. (p. 14)"
    },
    {
        id: 29,
        text: "A company has an application that produces unstructured data continuously. The company needs to store the data so that the data is durable and easy to query. Which AWS service can the company use to meet these requirements?",
        options: [
        "Amazon RDS",
        "Amazon Aurora",
        "Amazon QuickSight",
        "Amazon DynamoDB",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon DynamoDB is not specifically designed for unstructured data, but it can handle semi-structured and structured data effectively. (p. 15)"
    },
    {
        id: 30,
        text: "A company is building an application that will receive millions of database queries each second. The company needs the data store for the application to scale to meet these needs. Which AWS service will meet this requirement?",
        options: [
        "Amazon DynamoDB",
        "AWS Cloud9",
        "Amazon ElastiCache for Memcached",
        "Amazon Neptune",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 31,
        text: "Which AWS service is designed for users running workloads that include a NoSQL database?",
        options: [
        "Amazon RDS",
        "Amazon S3",
        "Amazon Redshift",
        "Amazon DynamoDB",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 32,
        text: "Which AWS service is a fully managed NoSQL database service?",
        options: [
        "Amazon RDS",
        "Amazon Redshift",
        "Amazon DynamoDB",
        "Amazon Aurora",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 33,
        text: "A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?",
        options: [
        "Amazon Aurora",
        "Amazon Redshift Serverless",
        "AWS Lambda",
        "Amazon RDS",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. It is specifically designed for analytics and data warehousing. (p. 16)"
    },
    {
        id: 34,
        text: "A company operates a petabyte-scale data warehouse to analyze its data. The company wants a solution that will not require manual hardware and software management. Which AWS service will meet these requirements?",
        options: [
        "Amazon DocumentDB (with MongoDB compatibility)",
        "Amazon Redshift",
        "Amazon Neptune",
        "Amazon ElastiCache",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Redshift is a fast, fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to efficiently analyze all your data using your existing business intelligence tools. (p. 17)"
    },
    {
        id: 35,
        text: "Which AWS service is designed to help users handle large amounts of data in a data warehouse environment?",
        options: [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Aurora",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 36,
        text: "Which of the following is a fully managed graph database service on AWS?",
        options: [
        "Amazon Aurora",
        "Amazon FSx",
        "Amazon DynamoDB",
        "Amazon Neptune",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon Neptune is a fully managed graph database service that scales to handle billions of relationships and lets you query them with milliseconds latency. (p. 18)"
    },
    {
        id: 37,
        text: "A company wants to run a graph query that provides credit card users' names, addresses, and transactions. The company wants the graph to show if the names, addresses, and transactions indicates possible fraud. Which AWS database service will meet these requirements?",
        options: [
        "Amazon DocumentDB (with MongoDB compatibility)",
        "Amazon Timestream",
        "Amazon DynamoDB",
        "Amazon Neptune",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon Neptune can be used to build/run apps that work with highly connected data sets like fraud detection, knowledge graph and recommendation engine. (p. 18)"
    },
    {
        id: 38,
        text: "A company wants to build graph queries for real-time fraud pattern detection. Which AWS service will meet this requirement?",
        options: [
        "Amazon Neptune",
        "Amazon DynamoDB",
        "Amazon Timestream",
        "Amazon Forecast",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 39,
        text: "Which AWS service or feature allows a company to have its own logically isolated section of the AWS Cloud?",
        options: [
        "AWS VPN",
        "Availability Zones",
        "Amazon Virtual Private Cloud (Amazon VPC)",
        "AWS Regions",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 40,
        text: "What is the purpose of having an internet gateway within a VPC?",
        options: [
        "To create a VPN connection to the VPC",
        "To allow communication between the VPC and the internet",
        "To impose bandwidth constraints on internet traffic",
        "To load balance traffic from the internet across Amazon EC2 instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The primary purpose of an internet gateway (IGW) within a Virtual Private Cloud (VPC) is to enable communication between resources in the VPC and the internet. (p. 19)"
    },
    {
        id: 41,
        text: "Which AWS service or component allows inbound traffic from the internet to access a VPC?",
        options: [
        "Internet gateway",
        "NAT gateway",
        "AWS WAF",
        "VPC peering",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. (p. 20)"
    },
    {
        id: 42,
        text: "Which of the following can be components of a VPC in the AWS Cloud? (Choose two.)",
        options: [
        "Amazon API Gateway",
        "Amazon S3 buckets and objects",
        "AWS Storage Gateway",
        "Internet gateway",
        "Subnet",
    ],
        correctAnswer: 3,
        correctAnswers: [3, 4],
        explanation: ""
    },
    {
        id: 43,
        text: "Which component must be attached to a VPC to enable inbound internet access?",
        options: [
        "NAT gateway",
        "VPC endpoint",
        "VPN connection",
        "Internet gateway",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 44,
        text: "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?",
        options: [
        "VPC endpoint",
        "NAT gateway",
        "Amazon PrivateLink",
        "VPC peering",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "A NAT Gateway is an AWS service that allows a private subnet to have access to the Internet, but prevents the Internet from initiating a connection directly to the instances. (p. 21)"
    },
    {
        id: 45,
        text: "Which AWS service or feature gives users the ability to connect VPCs and on-premises networks to a central hub?",
        options: [
        "Virtual private gateway",
        "AWS Transit Gateway",
        "Internet gateway",
        "Customer gateway",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Transit Gateway connects your Amazon Virtual Private Clouds (VPCs) and on-premises networks through a central hub. (p. 22)"
    },
    {
        id: 46,
        text: "Which AWS service or feature allows a user to establish a dedicated network connection between a company's on-premises data center and the AWS Cloud?",
        options: [
        "AWS Direct Connect",
        "VPC peering",
        "AWS VPN",
        "Amazon Route 53",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Direct Connect allows a user to establish a dedicated network connection between a company's on-premises data center and the AWS Cloud. (p. 22)"
    },
    {
        id: 47,
        text: "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
        options: [
        "VPC endpoints",
        "AWS Transit Gateway",
        "Amazon Route 53",
        "AWS Secrets Manager",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Transit Gateway enables customers to connect multiple Amazon Virtual Private Clouds (VPCs) and on-premises networks through a central hub, simplifying the connectivity and routing between VPCs. (p. 23)"
    },
    {
        id: 48,
        text: "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
        options: [
        "Amazon Route 53",
        "Amazon Macie",
        "AWS Direct Connect",
        "AWS PrivateLink",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Direct Connect establishes a dedicated private connection between your on-premises infrastructure and AWS. (p. 24)"
    },
    {
        id: 49,
        text: "Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)",
        options: [
        "AWS VPN",
        "Elastic Load Balancing",
        "AWS Direct Connect",
        "VPC peering",
        "Amazon CloudFront",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "AWS VPN connects your on-premises networks and remote workers to the cloud. AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. (p. 24)"
    },
    {
        id: 50,
        text: "A company wants to establish a private network connection between AWS and its corporate network. Which AWS service or feature will meet this requirement?",
        options: [
        "Amazon Connect",
        "Amazon Route 53",
        "AWS Direct Connect",
        "VPC peering",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Direct Connect is the service that allows a company to establish a private network connection between its corporate network and an Amazon Virtual Private Cloud (Amazon VPC). (p. 25)"
    },
    {
        id: 51,
        text: "Which AWS services or features give users the ability to create a network connection between two VPCs? (Choose two.)",
        options: [
        "VPC endpoints",
        "Amazon Route 53",
        "VPC peering",
        "AWS Direct Connect",
        "AWS Transit Gateway",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 4],
        explanation: "VPC peering allows you to connect two VPCs within the same AWS region. AWS Transit Gateway is a service that simplifies the process of connecting multiple VPCs and on-premises networks through a central hub."
    },
    {
        id: 52,
        text: "A company needs to connect its on-premises data center to the AWS Cloud. The company needs a dedicated, low-latency connection with consistent network performance. Which AWS service will meet these requirements?",
        options: [
        "AWS Global Accelerator",
        "Amazon CloudFront",
        "AWS Direct Connect",
        "AWS Managed VPN",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Direct Connect provides a dedicated network connection from an on-premises data center to AWS. It offers a private, dedicated, and high-bandwidth connection that can help ensure low-latency and consistent network performance."
    },
    {
        id: 53,
        text: "A company is connecting multiple VPCs and on-premises networks. The company needs to use an AWS service as a cloud router to simplify peering relationships. Which AWS service can the company use to meet that requirement?",
        options: [
        "AWS Direct Connect",
        "AWS Transit Gateway",
        "Amazon Connect",
        "Amazon Route 53",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Transit Gateway is the AWS service that allows you to connect multiple VPCs and on-premises networks through a central hub. It simplifies network management by eliminating the need for complex peering relationships."
    },
    {
        id: 54,
        text: "A company is building AWS architecture to deliver real-time data feeds from an on-premises data center into an application that runs on AWS. The company needs a consistent network connection with minimal latency. What should the company use to connect the application and the data center to meet these requirements?",
        options: [
        "AWS Direct Connect",
        "Public internet",
        "AWS VPN",
        "Amazon Connect",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 55,
        text: "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
        options: [
        "AWS VPN",
        "Amazon Connect",
        "AWS Direct Connect",
        "Internet gateway",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 56,
        text: "A company wants to maintain bandwidth throughput and provide a more consistent network experience than public internet-based connections. Which AWS service should the company choose?",
        options: [
        "AWS VPN",
        "AWS Direct Connect",
        "Amazon Connect",
        "Amazon CloudFront",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 57,
        text: "A company needs to set up dedicated network connectivity between its on-premises data center and the AWS Cloud. The network cannot use the public internet. Which AWS service or feature will meet these requirements?",
        options: [
        "AWS Transit Gateway",
        "AWS VPN",
        "Amazon CloudFront",
        "AWS Direct Connect",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 58,
        text: "Which AWS service can create a private network connection from on premises to the AWS Cloud?",
        options: [
        "AWS Config",
        "Virtual Private Cloud (Amazon VPC)",
        "AWS Direct Connect",
        "Amazon Route 53",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 59,
        text: "A company wants to use an AWS networking solution that can act as a centralized gateway between multiple VPCs and on-premises networks. Which AWS service or feature will meet this requirement?",
        options: [
        "Gateway VPC endpoint",
        "AWS Direct Connect",
        "AWS Transit Gateway",
        "AWS PrivateLink",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 60,
        text: "Which AWS network services or features allow CIDR block notation when providing an IP address range? (Choose two.)",
        options: [
        "Security groups",
        "Amazon Machine Image (AMI)",
        "Network access control list (network ACL)",
        "AWS Budgets",
        "Amazon Elastic Block Store (Amazon EBS)",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: ""
    },
    {
        id: 61,
        text: "A company needs stateless network filtering for its VPC. Which AWS service, tool, or feature will meet this requirement?",
        options: [
        "AWS PrivateLink",
        "Security group",
        "Network access control list (ACL)",
        "AWS WAF",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 62,
        text: "Which of the following services can be used to block network traffic to an instance? (Choose two.)",
        options: [
        "Security groups",
        "Amazon Virtual Private Cloud (Amazon VPC) flow logs",
        "Network ACLs",
        "Amazon CloudWatch",
        "AWS CloudTrail",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "Security groups act as a virtual firewall for instances, controlling inbound and outbound traffic. Network ACLs operate at the subnet level and are stateless, evaluating rules for inbound and outbound traffic separately."
    },
    {
        id: 63,
        text: "Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?",
        options: [
        "Network ACLs",
        "Security groups",
        "AWS Trusted Advisor",
        "AWS WAF",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Security groups = EC2 access control. ACL = VPC access control."
    },
    {
        id: 64,
        text: "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
        options: [
        "Network access control list",
        "Security groups",
        "AWS Trusted Advisor",
        "Virtual private gateways",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Security groups act as a virtual firewall for your instances to control inbound and outbound traffic."
    },
    {
        id: 65,
        text: "A company created an Amazon EC2 instance. The company wants to control the incoming and outgoing network traffic at the instance level. Which AWS resource or service will meet this requirement?",
        options: [
        "AWS Shield",
        "Security groups",
        "Network Access Analyzer",
        "VPC endpoints",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Security groups act as virtual firewalls for your Amazon EC2 instances, controlling inbound and outbound traffic at the network level."
    },
    {
        id: 66,
        text: "A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances. Which AWS service or feature will meet this requirement?",
        options: [
        "Network ACLs",
        "AWS WAF",
        "Amazon GuardDuty",
        "Security groups",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Security groups act as a virtual firewall that controls inbound and outbound traffic for EC2 instances within a subnet. You can configure rules in security groups to control network traffic between certain EC2 instances."
    },
    {
        id: 67,
        text: "Which AWS services or features provide high availability and low latency by enabling failover across different AWS Regions? (Choose two.)",
        options: [
        "Amazon Route 53",
        "Network Load Balancer",
        "Amazon S3 Transfer Acceleration",
        "AWS Global Accelerator",
        "Application Load Balancer",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: "Amazon Route 53 supports routing policies that enable failover across different AWS Regions. AWS Global Accelerator improves availability and performance and supports failover across different AWS Regions."
    },
    {
        id: 68,
        text: "A company wants to create a globally accessible ecommerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service will meet these requirements?",
        options: [
        "Amazon EC2",
        "Amazon VPC",
        "Amazon Route 53",
        "Amazon RDS",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service."
    },
    {
        id: 69,
        text: "A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS. Which AWS service should the company use to meet this requirement?",
        options: [
        "AWS Lambda",
        "Amazon Route 53",
        "Amazon CloudFront",
        "AWS Direct Connect",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service."
    },
    {
        id: 70,
        text: "A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?",
        options: [
        "Cloud Adoption Readiness Tool",
        "AWS Migration Hub",
        "AWS Database Migration Service (AWS DMS)",
        "AWS Application Migration Service",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Database Migration Service (AWS DMS) is a managed migration and replication service that helps you move your databases and analytics workloads to AWS quickly and securely."
    },
    {
        id: 71,
        text: "A company wants to move its on-premises databases to managed cloud database services by using a simplified migration process. Which AWS service or tool can help the company meet that requirement?",
        options: [
        "AWS Storage Gateway",
        "AWS Application Migration Service",
        "AWS DataSync",
        "AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Database Migration Service (DMS) is the service designed to help migrate on-premises databases to managed cloud database services in a simplified manner."
    },
    {
        id: 72,
        text: "A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?",
        options: [
        "AWS Migration Hub",
        "AWS Database Migration Service (AWS DMS)",
        "Migration Evaluator",
        "AWS Application Migration Service",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS DMS helps to migrate databases to AWS quickly and securely. It supports various source and target databases, including NoSQL databases like MongoDB, Cassandra, and Couchbase, making it suitable for migrating an on-premises NoSQL workload to Amazon DynamoDB."
    },
    {
        id: 73,
        text: "Which combination of AWS services can be used to move a commercial relational database to an Amazon-managed open-source database? (Choose two.)",
        options: [
        "AWS Database Migration Service (AWS DMS)",
        "AWS software development kits (SDKs)",
        "AWS Schema Conversion Tool",
        "AWS Systems Manager",
        "Amazon EMR",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: ""
    },
];

export const awsCCPQuestions3: Question[] = [
    {
        id: 1,
        text: "A company wants to migrate its on-premises workloads to the AWS Cloud. The company wants to separate workloads for chargeback to different departments. Which AWS services or features will meet these requirements? (Choose two.)",
        options: [
        "A. Placement groups",
        "B. Consolidated billing",
        "C. Edge locations",
        "D. AWS Config",
        "E. Multiple AWS accounts",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 4],
        explanation: "Consolidated billing is a feature of AWS Organizations that allows you to combine billing for multiple AWS accounts. With consolidated billing, each department can have its own AWS account for tracking and managing its resources separately, while the company enjoys the convenience of a single payment method for all these accounts. This setup makes it easier to track costs and implement chargeback mechanisms. Creating multiple AWS accounts, one for each department, is an effective way to segregate resources, manage permissions, and track costs separately."
    },
    {
        id: 2,
        text: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
        options: [
        "A. Enable client-side encryption for objects that are stored in Amazon S3.",
        "B. Configure IAM security policies to comply with the principle of least privilege.",
        "C. Patch the guest operating system on an Amazon EC2 instance.",
        "D. Apply updates to the Nitro Hypervisor.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Applying updates to the Nitro Hypervisor is an AWS responsibility. The Nitro Hypervisor is a component of the underlying infrastructure managed by AWS. (Enabling client-side encryption, configuring IAM policies, and patching the guest OS are customer responsibilities)."
    },
    {
        id: 3,
        text: "Which option is a benefit of using AWS for cloud computing?",
        options: [
        "B. Pay-as-you-go pricing",
        "C. Decreased speed and agility",
        "D. Spending money running and maintaining data centers",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Pay-as-you-go pricing is a key advantage of cloud computing, particularly with AWS. It allows businesses to pay only for the resources they use, without any upfront costs or long-term commitments."
    },
    {
        id: 4,
        text: "Which option is an AWS Cloud Adoption Framework (AWS CAF) business perspective capability?",
        options: [
        "A. Culture evolution",
        "B. Event management",
        "C. Data monetization",
        "D. Platform architecture",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Data monetization is associated with the Business perspective. (Culture evolution is People; Event management is Operations; Platform architecture is Platform)."
    },
    {
        id: 5,
        text: "A company is assessing its AWS Business Support plan to determine if the plan still meets the company's needs. The company is considering switching to AWS Enterprise Support. Which additional benefit will the company receive with AWS Enterprise Support?",
        options: [
        "A. A full set of AWS Trusted Advisor checks",
        "B. Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week",
        "C. A designated technical account manager (TAM) to assist in monitoring and optimization",
        "D. A consultative review and architecture guidance for the company's applications",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Enterprise Support includes a designated Technical Account Manager (TAM) to provide consultative architectural and operational guidance delivered in the context of your applications and use-cases to help you achieve the greatest value from AWS."
    },
    {
        id: 6,
        text: "Which pricing model will interrupt a running Amazon EC2 instance if capacity becomes temporarily unavailable?",
        options: [
        "A. On-Demand Instances",
        "B. Standard Reserved Instances",
        "C. Spot Instances",
        "D. Convertible Reserved Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 7,
        text: "Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)",
        options: [
        "A. Observability",
        "B. Incident and problem management",
        "C. Incident response",
        "D. Infrastructure protection",
        "E. Availability and continuity",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 3],
        explanation: "Infrastructure protection involves validating that systems and services are protected against unintended and unauthorized access. Incident response involves reducing potential harm by effectively responding to security incidents."
    },
    {
        id: 8,
        text: "A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously. Which option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?",
        options: [
        "A. AWS Graviton processor",
        "B. Dedicated Hosts",
        "C. EC2 Instance Savings Plans",
        "D. Amazon EC2 Auto Scaling instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 9,
        text: "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
        options: [
        "A. Agility",
        "B. Elasticity",
        "C. Reliability",
        "D. Durability",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The characteristic of the AWS Cloud that helps users eliminate underutilized CPU capacity is elasticity. Elasticity allows users to scale their computing resources up or down based on their needs."
    },
    {
        id: 10,
        text: "Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)",
        options: [
        "A. Amazon WorkSpaces",
        "B. Amazon Simple Queue Service (Amazon SQS)",
        "C. Amazon Connect",
        "D. AWS Trusted Advisor",
        "E. AWS Step Functions",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 4],
        explanation: "Amazon SQS helps decouple sender and receiver components by allowing asynchronous communication. AWS Step Functions allow you to coordinate and sequence AWS services in a serverless workflow, helping create workflows that are scalable and loosely coupled."
    },
    {
        id: 11,
        text: "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
        options: [
        "A. AWS Budgets",
        "B. AWS Cost Explorer",
        "C. AWS Cost Allocation Tags",
        "D. AWS Organizations",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Budgets is the AWS Cloud service that allows users to set custom spending thresholds and receive alerts when those thresholds are exceeded."
    },
    {
        id: 12,
        text: "A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey. Which AWS CAF governance perspective capability will meet these requirements?",
        options: [
        "A. Benefits management",
        "B. Risk management",
        "C. Application portfolio management",
        "D. Cloud financial management",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Benefits management ensures that the business benefits associated with your cloud investments are realized and sustained. It involves identifying metrics, quantifying desired benefits, and incorporating benefits delivery into a realization roadmap."
    },
    {
        id: 13,
        text: "A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?",
        options: [
        "A. S3 Versioning",
        "B. S3 Transfer Acceleration",
        "C. S3 ACLs",
        "D. S3 Intelligent-Tiering",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "S3 Transfer Acceleration utilizes Amazon CloudFront's globally distributed edge locations to accelerate the upload of objects to an S3 bucket, reducing latency and improving speeds when transferring files over long distances."
    },
    {
        id: 14,
        text: "A company needs to continuously run an experimental workload on an Amazon EC2 instance and stop the instance after 12 hours. Which instance purchasing option will meet this requirement MOST cost-effectively?",
        options: [
        "A. On-Demand Instances",
        "B. Reserved Instances",
        "C. Spot Instances",
        "D. Dedicated Instances",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 15,
        text: "Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud helps accelerate business outcomes?",
        options: [
        "A. Scale",
        "B. Envision",
        "C. Align",
        "D. Launch",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The Envision phase focuses on demonstrating how cloud will help accelerate your business outcomes."
    },
    {
        id: 16,
        text: "Which option is a customer responsibility under the AWS shared responsibility model?",
        options: [
        "A. Maintenance of underlying hardware of Amazon EC2 instances",
        "B. Application data security",
        "C. Physical security of data centers",
        "D. Maintenance of VPC components",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 17,
        text: "A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which approach will achieve this goal?",
        options: [
        "A. Use EC2 instances in multiple AWS Regions.",
        "B. Use EC2 instances in multiple Amazon CloudFront locations.",
        "C. Use EC2 instances in multiple edge locations.",
        "D. Use EC2 instances in AWS Local Zones.",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 18,
        text: "A company wants to modernize and convert a monolithic application into microservices. The company wants to move the application to AWS. Which migration strategy should the company use?",
        options: [
        "A. Rehost",
        "B. Replatform",
        "C. Repurchase",
        "D. Refactor",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Refactor or re-architect is to convert a monolithic application into microservices."
    },
    {
        id: 19,
        text: "A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?",
        options: [
        "A. To access the AWS account as the AWS account root user",
        "B. To access the AWS account through the AWS Management Console",
        "C. To access the AWS account through a CLI",
        "D. To access all of a company's AWS accounts",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 20,
        text: "Which option is an environment that consists of one or more data centers?",
        options: [
        "A. Amazon CloudFront",
        "B. Availability Zone",
        "C. VPC",
        "D. AWS Outposts",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region."
    },
    {
        id: 21,
        text: "A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead. Which AWS service or resource should the company use to meet these requirements?",
        options: [
        "A. AWS Snowmobile",
        "B. AWS Snowball Edge",
        "C. AWS Data Exchange",
        "D. AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Snowmobile is the appropriate choice for migrating 50 petabytes of file storage data. It is a data transfer service that physically transports massive amounts of data to the AWS Cloud."
    },
    {
        id: 22,
        text: "A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?",
        options: [
        "A. Amazon AppStream 2.0",
        "B. AWS AppSync",
        "C. Amazon WorkLink",
        "D. AWS Elastic Beanstalk",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon AppStream 2.0 allows you to stream desktop applications securely to any device running a web browser, making it ideal for scenarios where the client hardware may not be powerful enough."
    },
    {
        id: 23,
        text: "A company wants to query its server logs to gain insights about its customers' experiences. Which AWS service will store this data MOST cost-effectively?",
        options: [
        "A. Amazon Aurora",
        "B. Amazon Elastic File System (Amazon EFS)",
        "C. Amazon Elastic Block Store (Amazon EBS)",
        "D. Amazon S3",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "For cost-effective storage and querying of large volumes of data, especially log data, Amazon S3 (Simple Storage Service) is the most suitable option."
    },
    {
        id: 24,
        text: "Which of the following is a recommended design principle for AWS Cloud architecture?",
        options: [
        "A. Design tightly coupled components.",
        "B. Build a single application component that can handle all the application functionality.",
        "C. Make large changes on fewer iterations to reduce chances of failure.",
        "D. Avoid monolithic architecture by segmenting workloads.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Segmenting workloads into smaller, more manageable components allows for greater scalability, resilience, and flexibility in the cloud. This aligns with best practices where services are decoupled."
    },
    {
        id: 25,
        text: "Which AWS service helps users audit API activity across their AWS account?",
        options: [
        "A. AWS CloudTrail",
        "B. Amazon Inspector",
        "C. AWS WAF",
        "D. AWS Config",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "With AWS CloudTrail, you can monitor your AWS deployments by getting a history of AWS API calls for your account, including calls made by the Console, SDKs, CLI, and other services."
    },
    {
        id: 26,
        text: "Which task is a customer's responsibility, according to the AWS shared responsibility model?",
        options: [
        "A. Management of the guest operating systems",
        "B. Maintenance of the configuration of infrastructure devices",
        "C. Management of the host operating systems and virtualization",
        "D. Maintenance of the software that powers Availability Zones",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 27,
        text: "A company wants to automatically add and remove Amazon EC2 instances. The company wants the EC2 instances to adjust to varying workloads dynamically. Which service or feature will meet these requirements?",
        options: [
        "A. Amazon DynamoDB",
        "B. Amazon EC2 Spot Instances",
        "C. AWS Snow Family",
        "D. Amazon EC2 Auto Scaling",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 28,
        text: "A user wants to securely automate the management and rotation of credentials that are shared between applications, while spending the least amount of time on managing tasks. Which AWS service or feature can be used to accomplish this?",
        options: [
        "A. AWS CloudHSM",
        "B. AWS Key Management Service (AWS KMS)",
        "C. AWS Secrets Manager",
        "D. Server-side encryption",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Secrets Manager helps in the secure storage, rotation, and retrieval of sensitive credentials such as API keys and database passwords. AWS CloudHSM and KMS focus more on encryption keys rather than automated credential rotation."
    },
    {
        id: 29,
        text: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
        options: [
        "A. Amazon GuardDuty",
        "B. Amazon Macie",
        "C. Amazon Inspector",
        "D. AWS Shield",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Macie is a data security service that discovers sensitive data using machine learning and pattern matching to provide visibility into data security risks."
    },
    {
        id: 30,
        text: "Which actions are best practices for an AWS account root user? (Choose two.)",
        options: [
        "A. Share root user credentials with team members.",
        "B. Create multiple root users for the account, separated by environment.",
        "C. Enable multi-factor authentication (MFA) on the root user.",
        "D. Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user.",
        "E. Use programmatic access instead of the root user and password.",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 3],
        explanation: "Enabling MFA adds an extra layer of security to protect the root user account. It is also recommended to create an IAM user with necessary permissions for daily tasks rather than using the root user to maintain better security and accountability. Here are the Multiple Choice Questions (31-70) extracted from the provided PDF, formatted as requested. AWS Mock Test Questions 31-70"
    },
    {
        id: 31,
        text: "A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes. Which solution will meet these requirements? Options: A. Create a read replica of the DB instance. B. Create a template of the DB instance by using AWS CloudFormation. C. Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3. D. Modify the DB instance to be a Multi-AZ deployment. - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 32,
        text: "A company plans to migrate its application to AWS and run the application on Amazon EC2 instances. The application will have continuous usage for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively? Options: A. Reserved Instances - Correct B. Spot Instances C. On-Demand Instances D. Dedicated Hosts",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Reserved Instances are well-suited for applications with steady, predictable workloads over a term commitment, such as one year."
    },
    {
        id: 33,
        text: "A company needs to transfer data between an Amazon S3 bucket and an on-premises application. Who is responsible for the security of this data, according to the AWS shared responsibility model? Options: A. The company - Correct B. AWS C. Firewall vendor D. AWS Marketplace partner",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "The company (customers) is responsible to protect their own data."
    },
    {
        id: 34,
        text: "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand? Options: A. Security B. Reliability - Correct C. Performance efficiency D. Cost optimization",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "The Reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to. This includes the ability to operate and test the workload through its total lifecycle."
    },
    {
        id: 35,
        text: "A company wants to identify Amazon S3 buckets that are shared with another AWS account. Which AWS service or feature will meet these requirements? Options: A. AWS Lake Formation B. IAM credential report C. Amazon CloudWatch D. IAM Access Analyzer - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "IAM Access Analyzer external access analyzers help identify resources in your organization and accounts that are shared with an external entity."
    },
    {
        id: 36,
        text: "Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights? Options: A. Amazon Athena B. Amazon Kendra C. Amazon QuickSight - Correct D. Amazon Redshift",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon QuickSight is the AWS service that gives users the ability to create interactive business intelligence (BI) dashboards that can include machine learning insights."
    },
    {
        id: 37,
        text: "Which of the following is an AWS value proposition that describes a user's ability to scale infrastructure based on demand? Options: A. Speed of innovation B. Resource elasticity - Correct C. Decoupled architecture D. Global deployment",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Elasticity is the ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you want to do this automatically."
    },
    {
        id: 38,
        text: "Which action is a security best practice for access to sensitive data that is stored in an Amazon S3 bucket? Options: A. Enable S3 Cross-Region Replication (CRR) on the S3 bucket. B. Use IAM roles for applications that require access to the S3 bucket. - Correct C. Configure AWS WAF to prevent unauthorized access to the S3 bucket. D. Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket.",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 39,
        text: "A company wants to know more about the benefits offered by cloud computing. The company wants to understand the operational advantage of agility. How does AWS provide agility for users? Options: A. The ability the ensure high availability by deploying workloads to multiple regions B. A pay-as-you-go model for many services and resources C. The ability to transfer infrastructure management to the AWS Cloud D. The ability to provision and deprovision resources quickly with minimal effort - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 40,
        text: "A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement? Options: A. AWS Identity and Access Management (IAM) B. Amazon Cognito - Correct C. AWS IAM Identity Center (AWS Single Sign-On) D. AWS CLI",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Cognito supports authentication with identity providers (IdPs) through Security Assertion Markup Language 2.0 (SAML 2.0). You can use an IdP that supports SAML with Amazon Cognito to provide a simple onboarding flow for your users."
    },
    {
        id: 41,
        text: "Which AWS service should users use to learn about AWS service availability and operations? Options: A. Amazon EventBridge B. AWS Service Catalog C. AWS Control Tower D. AWS Health Dashboard - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Health Dashboard provides personalized information about AWS service health events that might affect your resources."
    },
    {
        id: 42,
        text: "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC? Options: A. VPC Flow Logs - Correct B. Amazon Inspector C. VPC endpoint services D. NAT gateway",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
    },
    {
        id: 43,
        text: "What is the customer ALWAYS responsible for managing, according to the AWS shared responsibility model? Options: A. Software licenses B. Networking C. Customer data - Correct D. Encryption keys",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 44,
        text: "Which AWS service can be used to retrieve compliance reports on demand? Options: A. AWS Secrets Manager B. AWS Artifact - Correct C. AWS Security Hub D. AWS Certificate Manager",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 45,
        text: "Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates? Options: A. AWS WAF B. AWS Trusted Advisor C. Amazon Inspector - Correct D. AWS Shield",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 46,
        text: "A company plans to migrate to the AWS Cloud. The company is gathering information about its on-premises infrastructure and requires information such as the hostname, IP address, and MAC address. Which AWS service will meet these requirements? Options: A. AWS DataSync B. AWS Application Migration Service C. AWS Application Discovery Service - Correct D. AWS Database Migration Service (AWS DMS)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Application Discovery Service collects both server and database configuration information. Server information includes hostnames, IP addresses, MAC addresses, as well as resource allocation details."
    },
    {
        id: 47,
        text: "Which action will help increase security in the AWS Cloud? Options: A. Enable programmatic access for all IAM users. B. Use IAM users instead of IAM roles to delegate permissions. C. Rotate access keys on a reoccurring basis. - Correct D. Use inline policies instead of customer managed policies.",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "IAM access keys work as credentials for programmatic access. Credentials should be rotated or changed on a periodic time frame. For this reason, it is considered a security best practice to rotate access keys."
    },
    {
        id: 48,
        text: "A company is planning to migrate its application to the AWS Cloud. Which AWS tool or set of resources should the company use to analyze and assess its readiness for migration? Options: A. AWS Cloud Adoption Framework (AWS CAF) - Correct B. AWS Pricing Calculator C. AWS Well-Architected Framework D. AWS Budgets",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "The AWS Cloud Adoption Framework (AWS CAF) is designed to help organizations develop an effective strategy for adopting the AWS Cloud. It provides a comprehensive framework that can help organizations assess their readiness and plan their migration strategy effectively."
    },
    {
        id: 49,
        text: "Which of the following describes some of the core functionality of Amazon S3? Options: A. Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2. B. Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability. - Correct C. Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-standard SMB protocol. D. Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources.",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 50,
        text: "Which AWS benefit is demonstrated by on-demand technology services that enable companies to replace upfront fixed expenses with variable expenses? Options: A. High availability B. Economies of scale C. Pay-as-you-go pricing - Correct D. Global reach",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 51,
        text: "Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.) Options: A. AWS VPN - Correct B. Elastic Load Balancing C. AWS Direct Connect - Correct D. VPC peering E. Amazon CloudFront",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS VPN connects your on-premises networks and remote workers to the cloud. AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable."
    },
    {
        id: 52,
        text: "A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this? Options: A. Amazon RDS B. Amazon DynamoDB - Correct C. Amazon Aurora D. Amazon Redshift",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "DynamoDB is a fully managed Non-relational database in AWS."
    },
    {
        id: 53,
        text: "Which actions are examples of a company's effort to rightsize its AWS resources to control cloud costs? (Choose two.) Options: A. Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets. B. Base the selection of Amazon EC2 instance types on past utilization patterns. - Correct C. Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers. - Correct D. Use Multi-AZ deployments for Amazon RDS. E. Replace existing Amazon EC2 instances with AWS Elastic Beanstalk.",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 54,
        text: "Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances? Options: A. Network ACLs B. Security groups - Correct C. AWS Trusted Advisor D. AWS WAF",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Security groups = EC2 access control. Network ACLs = VPC access control."
    },
    {
        id: 55,
        text: "Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.) Options: A. Perform operations as code. B. Enable traceability. C. Automatically scale to meet demand. - Correct D. Deploy resources globally to improve response time. E. Automatically recover from failure. - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Automatically scale to meet demand and Automatically recover from failure are design principles for reliability."
    },
    {
        id: 56,
        text: "A company that uses AWS needs to transfer 2 TB of data. Which type of transfer of that data would result in no cost for the company? Options: A. Inbound data transfer from the internet - Correct B. Outbound data transfer to the internet C. Data transfer between AWS Regions D. Data transfer between Availability Zones",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "There is no charge for inbound data transfer across all services in all Regions."
    },
    {
        id: 57,
        text: "A company wants to create templates that the company can reuse to deploy multiple AWS resources. Which AWS service or feature can the company use to meet this requirement? Options: A. AWS Marketplace B. Amazon Machine Image (AMI) C. AWS CloudFormation - Correct D. AWS OpsWorks",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS CloudFormation allows users to define and provision AWS infrastructure and resources using templates."
    },
    {
        id: 58,
        text: "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use? Options: A. AWS Step Functions B. Amazon Simple Notification Service (Amazon SNS) C. Amazon Kinesis Data Streams D. Amazon Simple Queue Service (Amazon SQS) - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon SQS FIFO queues preserve the order in which messages are sent and received, and ensure that the messages are processed in first-in, first-out (FIFO) order."
    },
    {
        id: 59,
        text: "Which AWS service or feature is a browser-based, pre-authenticated service that can be launched directly from the AWS Management Console? Options: A. AWS API B. AWS Lightsail C. AWS Cloud9 D. AWS CloudShell - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS CloudShell is a browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console."
    },
    {
        id: 60,
        text: "A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Choose two.) Options: A. Amazon Athena B. Amazon RDS - Correct C. Amazon EC2 D. Amazon DynamoDB E. Amazon Aurora - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Aurora PostgreSQL is fully managed and PostgreSQL-compatible. Amazon RDS also supports PostgreSQL engines."
    },
    {
        id: 61,
        text: "A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements? Options: A. AWS IoT Core B. Amazon Lightsail C. AWS Storage Gateway D. AWS Snowball Edge - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "You can import or export data between your local environments and Amazon S3, and physically transport the data with one or more devices without using the internet (Snowball Edge)."
    },
    {
        id: 62,
        text: "A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages. Which AWS service or feature will give the application permission to access required AWS services? Options: A. AWS Certificate Manager (ACM) B. IAM roles - Correct C. AWS Security Hub D. Amazon GuardDuty",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 63,
        text: "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application? Options: A. AWS CloudFormation B. AWS Elastic Beanstalk - Correct C. Amazon EC2 D. AWS OpsWorks",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Elastic Beanstalk is used for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, etc."
    },
    {
        id: 64,
        text: "A company needs a content delivery network that provides secure delivery of data, videos, applications, and APIs to users globally with low latency and high transfer speeds. Which AWS service meets these requirements? Options: A. Amazon CloudFront - Correct B. Elastic Load Balancing C. Amazon S3 D. Amazon Elastic Transcoder",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 65,
        text: "A company needs to use third-party software for its workload on AWS. Which AWS service or feature can the company use to purchase the software? Options: A. AWS Resource Access Manager B. AWS Managed Services C. AWS License Manager D. AWS Marketplace - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Marketplace allows you to discover, deploy, and manage software that runs on AWS."
    },
    {
        id: 66,
        text: "A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service will meet these requirements? Options: A. Amazon S3 B. Amazon Elastic File System (Amazon EFS) C. Amazon FSx for Windows File Server - Correct D. Amazon Elastic Block Store (Amazon EBS)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon FSx for Windows File Server provides file storage that is accessible over the industry-standard Server Message Block (SMB) protocol."
    },
    {
        id: 67,
        text: "A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations. Which AWS service should the company use to meet these requirements? Options: A. AWS Firewall Manager - Correct B. Amazon GuardDuty C. Amazon Detective D. AWS WAF",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Firewall Manager is a security management service that allows you to centrally configure and manage firewall rules across your accounts."
    },
    {
        id: 68,
        text: "Which task is a responsibility of AWS, according to the AWS shared responsibility model? Options: A. Configure identity and access management for applications. B. Manage encryption options for data that is stored on AWS. C. Configure security groups for Amazon EC2 instances. D. Maintain the physical hardware of the infrastructure. - Correct",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Maintain the physical hardware of the infrastructure is an AWS responsibility."
    },
    {
        id: 69,
        text: "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this? Options: A. VPC endpoint B. NAT gateway - Correct C. Amazon PrivateLink D. VPC peering",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "A NAT Gateway is an AWS service that allows a private subnet to have access to the Internet, but prevents the Internet from initiating a connection directly to the instances."
    },
    {
        id: 70,
        text: "Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.) Options: A. Securing the virtualization layer - Correct B. Patching the operating system on Amazon EC2 instances C. Enforcing a strict password policy for IAM users D. Patching the operating system on Amazon RDS instances - Correct E. Configuring security groups and network ACLs",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
];

