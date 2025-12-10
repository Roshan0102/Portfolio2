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
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity to have full control over the underlying infrastructure (p. 1). With EC2, you launch instances and deploy containers on them using container orchestration tools like Docker or Kubernetes while retaining control over the configuration, scaling, and management of the underlying virtual servers (p. 1)."
    },
    {
        id: 2,
        text: "A company is planning to host its workloads on AWS. Which AWS service requires the company to update and patch the guest operating system?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon EC2 (Elastic Compute Cloud) is the AWS service that provides resizable compute capacity in the cloud (p. 1). When you use EC2 instances, you have control over the guest operating system, and it is your responsibility to update and patch the operating system (p. 1)."
    },
    {
        id: 3,
        text: "A company is migrating its workloads to the AWS Cloud. The company must retain full control of patch management for guest operating systems that host its applications. Which AWS service should the company use to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon EC2 (Elastic Compute Cloud) allows the company to retain full control over the guest operating systems, including patch management (p. 1). This level of control is suitable for scenarios where the company wants to manage the entire software stack, including the operating system (p. 1)."
    },
    {
        id: 4,
        text: "Which actions allow a system administrator to connect to an EC2 instance? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Session Manager enables you to establish secure connections to your Amazon Elastic Compute Cloud (EC2) instances, edge devices, on-premises servers, and virtual machines (VMs) (p. 1). Amazon EC2 Instance Connect provides a simple and secure way to connect to your Linux instances with Secure Shell (SSH) (p. 1)."
    },
    {
        id: 5,
        text: "Which AWS service uses AWS Compute Optimizer to provide rightsizing recommendations based on workload metrics?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 6,
        text: "Which AWS compute service gives users the ability to securely and reliably run containers at scale?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 7,
        text: "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster scheduling, and environment maintenance. Which AWS service meets these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Fargate is a technology that you use with Amazon ECS to run containers without having to manage servers or clusters of Amazon EC2 instances (p. 2)."
    },
    {
        id: 8,
        text: "Which of the following AWS services are serverless? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 9,
        text: "A company wants to migrate a company’s on-premises container infrastructure to the AWS Cloud. The company wants to prevent unplanned administration and operation cost and adapt to a serverless architecture. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 10,
        text: "Which AWS service provides serverless compute for use with containers?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 11,
        text: "A company wants to update its online data processing application by implementing container-based services that run for 4 hours at a time. The company does not want to provision or manage instances. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 12,
        text: "A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Elastic Beanstalk is a fully managed service that simplifies the deployment of applications on AWS (p. 3). It abstracts the underlying infrastructure, allowing developers to quickly deploy applications without manual resource creation and is suitable for rapid application deployment (p. 3)."
    },
    {
        id: 13,
        text: "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 14,
        text: "A company needs to deploy applications in the AWS Cloud as quickly as possible. The company wants to minimize the complexity that is related to the management of AWS resources. Which AWS service should the company use to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Elastic Beanstalk is a fully managed service that makes it easy to deploy applications in multiple languages (p. 3). It abstracts away the underlying infrastructure, allowing developers to focus on writing code while AWS handles the deployment, capacity provisioning, load balancing, and automatic scaling (p. 3)."
    },
    {
        id: 15,
        text: "Which AWS service supports the deployment and management of applications in the AWS Cloud?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Elastic Beanstalk helps you deploy and manage web applications with capacity provisioning, app health monitoring, and more (p. 4)."
    },
    {
        id: 16,
        text: "A company wants to deploy a non-containerized Java-based web application on AWS. The company wants a managed service to quickly deploy the application. The company wants the service to automatically provision capacity, load balance, scale, and monitor application health. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 17,
        text: "A company is using AWS for all its IT infrastructure. The company’s developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves. Which AWS service should the developers use to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 18,
        text: "A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources. Which AWS service will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Backup is a fully managed backup service that makes it easy to centralize and automate the back up of data across AWS services in the cloud as well as on-premises (p. 4)."
    },
    {
        id: 19,
        text: "A company needs a fully managed service that centralizes and automates data protection across AWS services and hybrid workloads. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 20,
        text: "A company has a centralized group of users with large file storage requirements that exceeded the space available on-premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Using an AWS Storage Gateway file gateway allows you to extend your on-premises file storage into the AWS Cloud seamlessly (p. 5). It provides low latency access to your data stored in Amazon S3 while maintaining the performance benefits of local access (p. 5)."
    },
    {
        id: 21,
        text: "Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Storage Gateway is a hybrid cloud storage service that enables on-premises applications to use cloud storage seamlessly (p. 5). It provides file, volume, and tape gateway interfaces to integrate on-premises environments with AWS Cloud storage (p. 5)."
    },
    {
        id: 22,
        text: "A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Storage Gateway is a hybrid cloud storage service that seamlessly integrates on-premises applications with cloud storage (p. 5). It supports various storage protocols, including Amazon S3 and Amazon Glacier, and allows on-premises data to be backed up to AWS without changing existing workflows (p. 5)."
    },
    {
        id: 23,
        text: "A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon S3 File Gateway supports a file interface into Amazon S3 and allows storing and retrieving objects in Amazon S3 using industry-standard file protocols such as NFS (p. 6)."
    },
    {
        id: 24,
        text: "A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Storage Gateway is a service that connects on-premises storage systems to AWS Cloud Storage Systems (p. 6). It offers several deployment options, including an option that provides locally cached Cloud Storage (p. 6)."
    },
    {
        id: 25,
        text: "A company has a physical tape library to store backups. The tape library is running out of space. The company needs to extend the tape library’s capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Storage Gateway connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between your on-premises IT environment and the AWS storage infrastructure (p. 6)."
    },
    {
        id: 26,
        text: "Which AWS service provides on-premises applications with low-latency access to data that is stored in the AWS Cloud?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 27,
        text: "Which AWS solution gives companies the ability to use protocols such as NFS to store and retrieve objects in Amazon S3?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 28,
        text: "A company wants a fully managed Windows file server for its Windows-based applications. Which AWS service will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon FSx is a fully managed file storage service that is compatible with Windows file servers (p. 7). It is designed to provide shared file storage for Windows-based applications (p. 7)."
    },
    {
        id: 29,
        text: "A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service meets these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon FSx for Windows File Server provides fully managed, highly reliable, and scalable file storage that is accessible over the industry-standard Server Message Block (SMB) protocol (p. 7)."
    },
    {
        id: 30,
        text: "A company wants to provide access to Windows file shares in AWS from its on-premises workloads. The company does not want to provision any additional infrastructure or applications in its data center. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon FSx File Gateway optimizes on-premises access to fully managed, highly reliable file shares in Amazon FSx for Windows File Server (p. 7)."
    },
    {
        id: 31,
        text: "A company needs a fully managed file server that natively supports Microsoft workloads and file systems. The file server must also support the SMB protocol. Which AWS service should the company use to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon FSx for Windows File Server is an AWS service that provides a fully managed file server that natively supports Microsoft workloads and file systems (p. 8)."
    },
    {
        id: 32,
        text: "Which AWS service allows for file sharing between multiple Amazon EC2 instances?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 33,
        text: "A company needs a managed NFS file system that the company can use with its AWS compute resources. Which AWS service or feature will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 34,
        text: "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Creating AMIs (Amazon Machine Images) is a common practice for disaster recovery (p. 8). Amazon Elastic Block Store (Amazon EBS) snapshots enable you to create point-in-time copies of your EBS volumes and are often part of a disaster recovery strategy (p. 8)."
    },
    {
        id: 35,
        text: "Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "The customer has to select AWS KMS (p. 8)."
    },
    {
        id: 36,
        text: "A user needs to perform a one-time backup of an Amazon Elastic Block Store (Amazon EBS) volume that is attached to an Amazon EC2 instance. What is the MOST operationally efficient way to perform this backup?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 37,
        text: "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 38,
        text: "A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "S3 Versioning is a feature that allows you to preserve, retrieve, and restore every version of every object stored in a bucket (p. 9). Enabling versioning helps protect against accidental deletion or overwriting of data (p. 9)."
    },
    {
        id: 39,
        text: "A security engineer wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console. Which AWS service or resource will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Access Analyzer for S3 is designed to review and analyze access policies for S3 buckets, providing insights into who has access to your buckets and how that access is granted (p. 10)."
    },
    {
        id: 40,
        text: "Which AWS service provides highly durable object storage?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon S3 (Simple Storage Service) provides highly durable object storage with 99.999999999% (11 9's) durability (p. 10)."
    },
    {
        id: 41,
        text: "A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon S3 File Gateway supports a file interface into Amazon S3 and allows storing and retrieving objects in Amazon S3 using industry-standard file protocols such as NFS (p. 10)."
    },
    {
        id: 42,
        text: "A company wants to store and retrieve files in Amazon S3 for its existing on-premises applications by using industry-standard file system protocols. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon S3 File Gateway provides a seamless way to connect to the cloud in order to store application data files and backup images as durable objects in Amazon S3 cloud storage (p. 10)."
    },
    {
        id: 43,
        text: "A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "S3 Transfer Acceleration utilizes Amazon CloudFront’s globally distributed edge locations to accelerate the upload of objects to an S3 bucket (p. 11)."
    },
    {
        id: 44,
        text: "A company wants to query its server logs to gain insights about its customers' experiences. Which AWS service will store this data MOST cost-effectively?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "For cost-effective storage and querying of large volumes of data, especially log data, Amazon S3 is the most suitable option (p. 11)."
    },
    {
        id: 45,
        text: "Which of the following describes the core functionality of Amazon S3?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 46,
        text: "A company is storing data in the AWS Cloud. If the company needs to access the data, data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "S3 Glacier Flexible Retrieval is designed for long-term archival of data that is infrequently accessed and where retrieval times of several hours are acceptable (p. 11). It is the most cost-effective storage class for data that is retained for months, years, or decades (p. 11)."
    },
    {
        id: 47,
        text: "Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon S3 now applies server-side encryption with Amazon S3 managed keys (SSE-S3) as the base level of encryption for every bucket (p. 12). You can choose to configure buckets to use server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS) instead (p. 12)."
    },
    {
        id: 48,
        text: "A company wants to store data in Amazon S3. The company rarely accesses the data, and the company can regenerate the data if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "The most cost-effective storage class would be S3 One Zone-Infrequent Access (S3 One Zone-IA) (p. 12). This storage class stores data in a single availability zone, providing cost savings compared to storage classes that store data redundantly across multiple availability zones (p. 12)."
    },
    {
        id: 49,
        text: "A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which S3 feature will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon S3 Lifecycle policies allow you to define rules to automatically transition objects between storage classes or delete them when they are no longer needed (p. 12)."
    },
    {
        id: 50,
        text: "A company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Macie can distinguish any personally identifiable information (PII) or protected health information (PHI) (p. 13)."
    },
    {
        id: 51,
        text: "Which Amazon S3 storage class is MOST cost-effective for unknown access patterns?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "S3 Intelligent-Tiering is the most cost-effective option for unknown access patterns (p. 13). It automatically moves objects between two access tiers (frequent and infrequent access) based on changing access patterns (p. 13)."
    },
    {
        id: 52,
        text: "A company wants durable storage for static content and infinitely scalable data storage infrastructure at the lowest cost. Which AWS service should the company choose?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon S3 is an object storage service designed to store and retrieve any amount of data from anywhere (p. 13). S3 offers industry leading durability, availability, performance, security, and virtually unlimited scalability at very low costs (p. 13)."
    },
    {
        id: 53,
        text: "A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data into comma-separated values (.csv) files. A developer wants to write a simple query that can read all of these files and generate a summary report. Which AWS service or feature should the developer use to meet these requirements with the LEAST amount of operational overhead?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Athena is a serverless query service that allows you to analyze data directly in Amazon S3 using SQL queries (p. 13)."
    },
    {
        id: 54,
        text: "A company wants to track tags, buckets, and prefixes for its S3 objects. Which S3 feature will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "To keep track of objects and their respective tags, buckets, and prefixes, you can use an S3 Inventory report (p. 13)."
    },
    {
        id: 55,
        text: "What does the Amazon S3 Intelligent-Tiering storage class offer?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon S3 Intelligent-Tiering is the only cloud storage class that delivers automatic storage cost savings when data access patterns change, without performance impact or operational overhead (p. 14)."
    },
    {
        id: 56,
        text: "Which Amazon S3 feature or storage class uses the AWS backbone network and edge locations to reduce latencies from the end user to Amazon S3?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "S3 Transfer Acceleration is a feature of Amazon S3 that uses Amazon CloudFront's globally distributed edge locations to accelerate transfers of files to and from Amazon S3 buckets (p. 14)."
    },
    {
        id: 57,
        text: "A company wants to use a managed service to identify and protect sensitive data that is stored in Amazon S3. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 58,
        text: "A company stores a large amount of data that auditors access only twice each year. Which Amazon S3 storage class should the company use to store the data with the LOWEST cost?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 59,
        text: "A company wants to store its files in the AWS Cloud. Users need to be able to download these files directly using a public URL. Which AWS service or feature will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 60,
        text: "A cloud engineer wants to store data in Amazon S3. The engineer will access some of the data yearly and some of the data daily. Which S3 storage class will meet these requirements MOST cost-effectively?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "When access patterns change, S3 Intelligent-Tiering will optimize storage costs by automatically moving data to the most cost-effective storage tier (p. 15)."
    },
    {
        id: 61,
        text: "A company needs to store infrequently used data for data archives and long-term backups. Which AWS service or storage class will meet these requirements MOST cost-effectively?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 62,
        text: "A company must archive its documents by using a write-once, read-many (WORM) mode to meet legal and compliance obligations. Which feature of Amazon S3 can the company use to meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "By using S3 Glacier Vault Lock, the company can ensure that its archived documents are stored in a write-once, read-many (WORM) model, meeting legal and compliance obligations that require data immutability and retention for a specified period or indefinitely (p. 15)."
    },
    {
        id: 63,
        text: "A company needs to use SQL syntax to perform a direct query of objects in an Amazon S3 bucket. Which AWS service can the company use to meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 64,
        text: "A company needs to use AWS technology to deploy a static website. Which solution meets this requirement with the LEAST amount of operational overhead?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 65,
        text: "A company uses Amazon S3 to store audio files that are each 5 megabytes in size. The company will rarely access the files, but the company must be able to retrieve the files immediately. Which S3 storage class will meet these requirements MOST cost-effectively?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 66,
        text: "What is the total volume of data that can be stored in Amazon S3?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 67,
        text: "A company wants an Amazon S3 solution that provides access to object storage within single-digit milliseconds. Which solution will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
];

export const awsCCPQuestions2: Question[] = [
    {
        id: 1,
        text: "A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Regions are geographical locations where AWS data centers (Availability Zones) are situated. When deploying Amazon RDS, you can choose the AWS Region that is geographically closest to your current location to reduce latency and improve performance. (p. 1)"
    },
    {
        id: 2,
        text: "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon RDS (Relational Database Service) provides managed database services, including PostgreSQL. It is suitable for online transaction processing (OLTP) workloads. (p. 2)"
    },
    {
        id: 3,
        text: "A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Aurora PostgreSQL is a fully managed, PostgreSQL-compatible database. In addition to the benefits of Aurora, Aurora PostgreSQL offers a convenient migration pathway from Amazon RDS into Aurora. (p. 3)"
    },
    {
        id: 4,
        text: "A user needs a relational database but does not have the resources to manage the hardware, resiliency, and replication. Which AWS service option meets the user's requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon RDS (Relational Database Service) is a fully managed relational database service that takes care of tasks such as hardware provisioning, database setup, patching, and backups. It provides a managed environment for various database engines, including MySQL. (p. 3)"
    },
    {
        id: 5,
        text: "Which task is the responsibility of a company that is using Amazon RDS?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS automates time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups, allowing you to focus on your applications. (p. 4) The customer is responsible for managing access control via IAM policies. (p. 3)"
    },
    {
        id: 6,
        text: "Which feature of Amazon RDS provides the ability to automatically create a primary database instance and to synchronously replicate data to an instance in another Availability Zone?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 7,
        text: "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 8,
        text: "A company has a MariaDB database on premises. The company wants to move the data to the AWS Cloud, Which AWS service will host this database with the LEAST amount of operational overhead?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 9,
        text: "A company needs to deploy a PostgreSQL database into Amazon RDS. The database must be highly available and fault tolerant. Which AWS solution should the company use to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 10,
        text: "A company uses Amazon RDS for a product database. The company wants to ensure the database is highly available. Which feature of Amazon RDS will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 11,
        text: "A company wants to run relationship databases in the AWS Cloud. The company wants to use a managed service that will install the database and run regular software updates. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 12,
        text: "A company wants to securely store Amazon RDS database credentials and automatically rotate user passwords periodically. Which AWS service or capability will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 13,
        text: "A company wants to migrate its on-premises SQL Server database to the AWS Cloud. The company wants AWS to handle the day-to-day administration of the database. Which AWS service will meet the company's requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 14,
        text: "A company has multiple SQL-based databases located in a data center. The company needs to migrate all database servers to the AWS Cloud to reduce the cost of operating physical servers. Which AWS service or resource will meet these requirements with the LEAST operational overhead?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 15,
        text: "Which AWS service supports MySQL database engines?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 16,
        text: "A company wants to deploy an application that stores data in a relational database. The company wants database tasks, such as automated backups and database snapshots, to be managed by AWS. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 17,
        text: "Which of the following is a fully managed MySQL-compatible database?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Aurora is a fully managed relational database engine compatible with MySQL and PostgreSQL. It offers the performance and availability of commercial databases with the simplicity and cost-effectiveness of open-source databases. (p. 8)"
    },
    {
        id: 18,
        text: "A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Aurora Serverless provides the highest level of automation and scalability as it is a serverless database solution. You don't have to worry about managing database instances, scaling, or maintenance. (p. 9)"
    },
    {
        id: 19,
        text: "Which AWS service is a relational database compatible with MySQL and PostgreSQL?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Aurora is a global-scale relational database service built for the cloud with full MySQL and PostgreSQL compatibility. (p. 9)"
    },
    {
        id: 20,
        text: "Which AWS services can host PostgreSQL databases? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 21,
        text: "A company uses Amazon Aurora as its database service. The company wants to encrypt its databases and database backups. Which party manages the encryption of the database clusters and database snapshots, according to the AWS shared responsibility model?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 22,
        text: "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "The customer is responsible for managing and controlling access to their DynamoDB tables. This includes defining appropriate permissions, user access control, and authentication mechanisms to ensure that only authorized users or services can access the tables. (p. 10)"
    },
    {
        id: 23,
        text: "To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon DynamoDB can automatically scale throughput capacity based on the application's demand, making it a suitable choice for workloads with varying traffic patterns. (p. 11)"
    },
    {
        id: 24,
        text: "A company is using Amazon DynamoDB. Which task is the company's responsibility, according to the AWS shared responsibility model?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Managing database access permissions is the customer's responsibility. Customers are responsible for defining and managing access permissions to their DynamoDB tables. (p. 12)"
    },
    {
        id: 25,
        text: "Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon DynamoDB provides single-digit millisecond latency at any scale. It is a fully managed NoSQL database service designed for applications that require consistent, single-digit millisecond latency, regardless of the volume of requests. (p. 12)"
    },
    {
        id: 26,
        text: "A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "DynamoDB is a fully managed Non-relational database in AWS. (p. 13)"
    },
    {
        id: 27,
        text: "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon DynamoDB is a serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale. (p. 14)"
    },
    {
        id: 28,
        text: "A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS DMS helps to migrate databases to AWS quickly and securely. It supports various source and target databases, including NoSQL databases, making it suitable for migrating an on-premises NoSQL workload to Amazon DynamoDB. (p. 14)"
    },
    {
        id: 29,
        text: "A company has an application that produces unstructured data continuously. The company needs to store the data so that the data is durable and easy to query. Which AWS service can the company use to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon DynamoDB is not specifically designed for unstructured data, but it can handle semi-structured and structured data effectively. (p. 15)"
    },
    {
        id: 30,
        text: "A company is building an application that will receive millions of database queries each second. The company needs the data store for the application to scale to meet these needs. Which AWS service will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 31,
        text: "Which AWS service is designed for users running workloads that include a NoSQL database?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 32,
        text: "Which AWS service is a fully managed NoSQL database service?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 33,
        text: "A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. It is specifically designed for analytics and data warehousing. (p. 16)"
    },
    {
        id: 34,
        text: "A company operates a petabyte-scale data warehouse to analyze its data. The company wants a solution that will not require manual hardware and software management. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Redshift is a fast, fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to efficiently analyze all your data using your existing business intelligence tools. (p. 17)"
    },
    {
        id: 35,
        text: "Which AWS service is designed to help users handle large amounts of data in a data warehouse environment?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 36,
        text: "Which of the following is a fully managed graph database service on AWS?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Neptune is a fully managed graph database service that scales to handle billions of relationships and lets you query them with milliseconds latency. (p. 18)"
    },
    {
        id: 37,
        text: "A company wants to run a graph query that provides credit card users' names, addresses, and transactions. The company wants the graph to show if the names, addresses, and transactions indicates possible fraud. Which AWS database service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Neptune can be used to build/run apps that work with highly connected data sets like fraud detection, knowledge graph and recommendation engine. (p. 18)"
    },
    {
        id: 38,
        text: "A company wants to build graph queries for real-time fraud pattern detection. Which AWS service will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 39,
        text: "Which AWS service or feature allows a company to have its own logically isolated section of the AWS Cloud?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 40,
        text: "What is the purpose of having an internet gateway within a VPC?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "The primary purpose of an internet gateway (IGW) within a Virtual Private Cloud (VPC) is to enable communication between resources in the VPC and the internet. (p. 19)"
    },
    {
        id: 41,
        text: "Which AWS service or component allows inbound traffic from the internet to access a VPC?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. (p. 20)"
    },
    {
        id: 42,
        text: "Which of the following can be components of a VPC in the AWS Cloud? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 43,
        text: "Which component must be attached to a VPC to enable inbound internet access?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 44,
        text: "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "A NAT Gateway is an AWS service that allows a private subnet to have access to the Internet, but prevents the Internet from initiating a connection directly to the instances. (p. 21)"
    },
    {
        id: 45,
        text: "Which AWS service or feature gives users the ability to connect VPCs and on-premises networks to a central hub?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Transit Gateway connects your Amazon Virtual Private Clouds (VPCs) and on-premises networks through a central hub. (p. 22)"
    },
    {
        id: 46,
        text: "Which AWS service or feature allows a user to establish a dedicated network connection between a company's on-premises data center and the AWS Cloud?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Direct Connect allows a user to establish a dedicated network connection between a company's on-premises data center and the AWS Cloud. (p. 22)"
    },
    {
        id: 47,
        text: "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Transit Gateway enables customers to connect multiple Amazon Virtual Private Clouds (VPCs) and on-premises networks through a central hub, simplifying the connectivity and routing between VPCs. (p. 23)"
    },
    {
        id: 48,
        text: "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Direct Connect establishes a dedicated private connection between your on-premises infrastructure and AWS. (p. 24)"
    },
    {
        id: 49,
        text: "Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS VPN connects your on-premises networks and remote workers to the cloud. AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. (p. 24)"
    },
    {
        id: 50,
        text: "A company wants to establish a private network connection between AWS and its corporate network. Which AWS service or feature will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Direct Connect is the service that allows a company to establish a private network connection between its corporate network and an Amazon Virtual Private Cloud (Amazon VPC). (p. 25)"
    },
    {
        id: 51,
        text: "Which AWS services or features give users the ability to create a network connection between two VPCs? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "VPC peering allows you to connect two VPCs within the same AWS region. AWS Transit Gateway is a service that simplifies the process of connecting multiple VPCs and on-premises networks through a central hub."
    },
    {
        id: 52,
        text: "A company needs to connect its on-premises data center to the AWS Cloud. The company needs a dedicated, low-latency connection with consistent network performance. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Direct Connect provides a dedicated network connection from an on-premises data center to AWS. It offers a private, dedicated, and high-bandwidth connection that can help ensure low-latency and consistent network performance."
    },
    {
        id: 53,
        text: "A company is connecting multiple VPCs and on-premises networks. The company needs to use an AWS service as a cloud router to simplify peering relationships. Which AWS service can the company use to meet that requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Transit Gateway is the AWS service that allows you to connect multiple VPCs and on-premises networks through a central hub. It simplifies network management by eliminating the need for complex peering relationships."
    },
    {
        id: 54,
        text: "A company is building AWS architecture to deliver real-time data feeds from an on-premises data center into an application that runs on AWS. The company needs a consistent network connection with minimal latency. What should the company use to connect the application and the data center to meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 55,
        text: "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 56,
        text: "A company wants to maintain bandwidth throughput and provide a more consistent network experience than public internet-based connections. Which AWS service should the company choose?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 57,
        text: "A company needs to set up dedicated network connectivity between its on-premises data center and the AWS Cloud. The network cannot use the public internet. Which AWS service or feature will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 58,
        text: "Which AWS service can create a private network connection from on premises to the AWS Cloud?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 59,
        text: "A company wants to use an AWS networking solution that can act as a centralized gateway between multiple VPCs and on-premises networks. Which AWS service or feature will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 60,
        text: "Which AWS network services or features allow CIDR block notation when providing an IP address range? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 61,
        text: "A company needs stateless network filtering for its VPC. Which AWS service, tool, or feature will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 62,
        text: "Which of the following services can be used to block network traffic to an instance? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Security groups act as a virtual firewall for instances, controlling inbound and outbound traffic. Network ACLs operate at the subnet level and are stateless, evaluating rules for inbound and outbound traffic separately."
    },
    {
        id: 63,
        text: "Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Security groups = EC2 access control. ACL = VPC access control."
    },
    {
        id: 64,
        text: "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Security groups act as a virtual firewall for your instances to control inbound and outbound traffic."
    },
    {
        id: 65,
        text: "A company created an Amazon EC2 instance. The company wants to control the incoming and outgoing network traffic at the instance level. Which AWS resource or service will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Security groups act as virtual firewalls for your Amazon EC2 instances, controlling inbound and outbound traffic at the network level."
    },
    {
        id: 66,
        text: "A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances. Which AWS service or feature will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Security groups act as a virtual firewall that controls inbound and outbound traffic for EC2 instances within a subnet. You can configure rules in security groups to control network traffic between certain EC2 instances."
    },
    {
        id: 67,
        text: "Which AWS services or features provide high availability and low latency by enabling failover across different AWS Regions? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Route 53 supports routing policies that enable failover across different AWS Regions. AWS Global Accelerator improves availability and performance and supports failover across different AWS Regions."
    },
    {
        id: 68,
        text: "A company wants to create a globally accessible ecommerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service will meet these requirements?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service."
    },
    {
        id: 69,
        text: "A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS. Which AWS service should the company use to meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service."
    },
    {
        id: 70,
        text: "A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Database Migration Service (AWS DMS) is a managed migration and replication service that helps you move your databases and analytics workloads to AWS quickly and securely."
    },
    {
        id: 71,
        text: "A company wants to move its on-premises databases to managed cloud database services by using a simplified migration process. Which AWS service or tool can help the company meet that requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS Database Migration Service (DMS) is the service designed to help migrate on-premises databases to managed cloud database services in a simplified manner."
    },
    {
        id: 72,
        text: "A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "AWS DMS helps to migrate databases to AWS quickly and securely. It supports various source and target databases, including NoSQL databases like MongoDB, Cassandra, and Couchbase, making it suitable for migrating an on-premises NoSQL workload to Amazon DynamoDB."
    },
    {
        id: 73,
        text: "Which combination of AWS services can be used to move a commercial relational database to an Amazon-managed open-source database? (Choose two.)",
        options: [
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
];

export const awsCCPQuestions3: Question[] = [
    {
        id: 1,
        text: "A company wants to migrate its on-premises workloads to the AWS Cloud. The company wants to separate workloads for chargeback to different departments. Which AWS services or features will meet these requirements? (Choose two.)",
        options: [
        "Placement groups",
        "Consolidated billing",
        "Edge locations",
        "AWS Config",
        "Multiple AWS accounts",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 4],
        explanation: "Consolidated billing is a feature of AWS Organizations that allows you to combine billing for multiple AWS accounts. With consolidated billing, each department can have its own AWS account for tracking and managing its resources separately, while the company enjoys the convenience of a single payment method for all these accounts. This setup makes it easier to track costs and implement chargeback mechanisms. Creating multiple AWS accounts, one for each department, is an effective way to segregate resources, manage permissions, and track costs separately."
    },
    {
        id: 2,
        text: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
        options: [
        "Enable client-side encryption for objects that are stored in Amazon S3.",
        "Configure IAM security policies to comply with the principle of least privilege.",
        "Patch the guest operating system on an Amazon EC2 instance.",
        "Apply updates to the Nitro Hypervisor.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Applying updates to the Nitro Hypervisor is an AWS responsibility. The Nitro Hypervisor is a component of the underlying infrastructure managed by AWS. (Enabling client-side encryption, configuring IAM policies, and patching the guest OS are customer responsibilities)."
    },
    {
        id: 3,
        text: "Which option is a benefit of using AWS for cloud computing?",
        options: [
        "Trade variable expense for fixed expense",
        "Pay-as-you-go pricing",
        "Decreased speed and agility",
        "Spending money running and maintaining data centers",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Pay-as-you-go pricing is a key advantage of cloud computing, particularly with AWS. It allows businesses to pay only for the resources they use, without any upfront costs or long-term commitments."
    },
    {
        id: 4,
        text: "Which option is an AWS Cloud Adoption Framework (AWS CAF) business perspective capability?",
        options: [
        "Culture evolution",
        "Event management",
        "Data monetization",
        "Platform architecture",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Data monetization is associated with the Business perspective. (Culture evolution is People; Event management is Operations; Platform architecture is Platform)."
    },
    {
        id: 5,
        text: "A company is assessing its AWS Business Support plan to determine if the plan still meets the company's needs. The company is considering switching to AWS Enterprise Support. Which additional benefit will the company receive with AWS Enterprise Support?",
        options: [
        "A full set of AWS Trusted Advisor checks",
        "Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week",
        "A designated technical account manager (TAM) to assist in monitoring and optimization",
        "A consultative review and architecture guidance for the company's applications",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Enterprise Support includes a designated Technical Account Manager (TAM) to provide consultative architectural and operational guidance delivered in the context of your applications and use-cases to help you achieve the greatest value from AWS."
    },
    {
        id: 6,
        text: "Which pricing model will interrupt a running Amazon EC2 instance if capacity becomes temporarily unavailable?",
        options: [
        "On-Demand Instances",
        "Standard Reserved Instances",
        "Spot Instances",
        "Convertible Reserved Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 7,
        text: "Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)",
        options: [
        "Observability",
        "Incident and problem management",
        "Incident response",
        "Infrastructure protection",
        "Availability and continuity",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 3],
        explanation: "Infrastructure protection involves validating that systems and services are protected against unintended and unauthorized access. Incident response involves reducing potential harm by effectively responding to security incidents."
    },
    {
        id: 8,
        text: "A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously. Which option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?",
        options: [
        "AWS Graviton processor",
        "Dedicated Hosts",
        "EC2 Instance Savings Plans",
        "Amazon EC2 Auto Scaling instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 9,
        text: "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
        options: [
        "Agility",
        "Elasticity",
        "Reliability",
        "Durability",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The characteristic of the AWS Cloud that helps users eliminate underutilized CPU capacity is elasticity. Elasticity allows users to scale their computing resources up or down based on their needs."
    },
    {
        id: 10,
        text: "Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)",
        options: [
        "Amazon WorkSpaces",
        "Amazon Simple Queue Service (Amazon SQS)",
        "Amazon Connect",
        "AWS Trusted Advisor",
        "AWS Step Functions",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 4],
        explanation: "Amazon SQS helps decouple sender and receiver components by allowing asynchronous communication. AWS Step Functions allow you to coordinate and sequence AWS services in a serverless workflow, helping create workflows that are scalable and loosely coupled."
    },
    {
        id: 11,
        text: "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
        options: [
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Cost Allocation Tags",
        "AWS Organizations",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Budgets is the AWS Cloud service that allows users to set custom spending thresholds and receive alerts when those thresholds are exceeded."
    },
    {
        id: 12,
        text: "A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey. Which AWS CAF governance perspective capability will meet these requirements?",
        options: [
        "Benefits management",
        "Risk management",
        "Application portfolio management",
        "Cloud financial management",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Benefits management ensures that the business benefits associated with your cloud investments are realized and sustained. It involves identifying metrics, quantifying desired benefits, and incorporating benefits delivery into a realization roadmap."
    },
    {
        id: 13,
        text: "A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?",
        options: [
        "S3 Versioning",
        "S3 Transfer Acceleration",
        "S3 ACLs",
        "S3 Intelligent-Tiering",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "S3 Transfer Acceleration utilizes Amazon CloudFront's globally distributed edge locations to accelerate the upload of objects to an S3 bucket, reducing latency and improving speeds when transferring files over long distances."
    },
    {
        id: 14,
        text: "A company needs to continuously run an experimental workload on an Amazon EC2 instance and stop the instance after 12 hours. Which instance purchasing option will meet this requirement MOST cost-effectively?",
        options: [
        "On-Demand Instances",
        "Reserved Instances",
        "Spot Instances",
        "Dedicated Instances",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 15,
        text: "Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud helps accelerate business outcomes?",
        options: [
        "Scale",
        "Envision",
        "Align",
        "Launch",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The Envision phase focuses on demonstrating how cloud will help accelerate your business outcomes."
    },
    {
        id: 16,
        text: "Which option is a customer responsibility under the AWS shared responsibility model?",
        options: [
        "Maintenance of underlying hardware of Amazon EC2 instances",
        "Application data security",
        "Physical security of data centers",
        "Maintenance of VPC components",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 17,
        text: "A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which approach will achieve this goal?",
        options: [
        "Use EC2 instances in multiple AWS Regions.",
        "Use EC2 instances in multiple Amazon CloudFront locations.",
        "Use EC2 instances in multiple edge locations.",
        "Use EC2 instances in AWS Local Zones.",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 18,
        text: "A company wants to modernize and convert a monolithic application into microservices. The company wants to move the application to AWS. Which migration strategy should the company use?",
        options: [
        "Rehost",
        "Replatform",
        "Repurchase",
        "Refactor",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Refactor or re-architect is to convert a monolithic application into microservices."
    },
    {
        id: 19,
        text: "A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?",
        options: [
        "To access the AWS account as the AWS account root user",
        "To access the AWS account through the AWS Management Console",
        "To access the AWS account through a CLI",
        "To access all of a company's AWS accounts",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 20,
        text: "Which option is an environment that consists of one or more data centers?",
        options: [
        "Amazon CloudFront",
        "Availability Zone",
        "VPC",
        "AWS Outposts",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region."
    },
    {
        id: 21,
        text: "A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead. Which AWS service or resource should the company use to meet these requirements?",
        options: [
        "AWS Snowmobile",
        "AWS Snowball Edge",
        "AWS Data Exchange",
        "AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Snowmobile is the appropriate choice for migrating 50 petabytes of file storage data. It is a data transfer service that physically transports massive amounts of data to the AWS Cloud."
    },
    {
        id: 22,
        text: "A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?",
        options: [
        "Amazon AppStream 2.0",
        "AWS AppSync",
        "Amazon WorkLink",
        "AWS Elastic Beanstalk",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon AppStream 2.0 allows you to stream desktop applications securely to any device running a web browser, making it ideal for scenarios where the client hardware may not be powerful enough."
    },
    {
        id: 23,
        text: "A company wants to query its server logs to gain insights about its customers' experiences. Which AWS service will store this data MOST cost-effectively?",
        options: [
        "Amazon Aurora",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon S3",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "For cost-effective storage and querying of large volumes of data, especially log data, Amazon S3 (Simple Storage Service) is the most suitable option."
    },
    {
        id: 24,
        text: "Which of the following is a recommended design principle for AWS Cloud architecture?",
        options: [
        "Design tightly coupled components.",
        "Build a single application component that can handle all the application functionality.",
        "Make large changes on fewer iterations to reduce chances of failure.",
        "Avoid monolithic architecture by segmenting workloads.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Segmenting workloads into smaller, more manageable components allows for greater scalability, resilience, and flexibility in the cloud. This aligns with best practices where services are decoupled."
    },
    {
        id: 25,
        text: "Which AWS service helps users audit API activity across their AWS account?",
        options: [
        "AWS CloudTrail",
        "Amazon Inspector",
        "AWS WAF",
        "AWS Config",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "With AWS CloudTrail, you can monitor your AWS deployments by getting a history of AWS API calls for your account, including calls made by the Console, SDKs, CLI, and other services."
    },
    {
        id: 26,
        text: "Which task is a customer's responsibility, according to the AWS shared responsibility model?",
        options: [
        "Management of the guest operating systems",
        "Maintenance of the configuration of infrastructure devices",
        "Management of the host operating systems and virtualization",
        "Maintenance of the software that powers Availability Zones",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 27,
        text: "A company wants to automatically add and remove Amazon EC2 instances. The company wants the EC2 instances to adjust to varying workloads dynamically. Which service or feature will meet these requirements?",
        options: [
        "Amazon DynamoDB",
        "Amazon EC2 Spot Instances",
        "AWS Snow Family",
        "Amazon EC2 Auto Scaling",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 28,
        text: "A user wants to securely automate the management and rotation of credentials that are shared between applications, while spending the least amount of time on managing tasks. Which AWS service or feature can be used to accomplish this?",
        options: [
        "AWS CloudHSM",
        "AWS Key Management Service (AWS KMS)",
        "AWS Secrets Manager",
        "Server-side encryption",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Secrets Manager helps in the secure storage, rotation, and retrieval of sensitive credentials such as API keys and database passwords. AWS CloudHSM and KMS focus more on encryption keys rather than automated credential rotation."
    },
    {
        id: 29,
        text: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
        options: [
        "Amazon GuardDuty",
        "Amazon Macie",
        "Amazon Inspector",
        "AWS Shield",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Macie is a data security service that discovers sensitive data using machine learning and pattern matching to provide visibility into data security risks."
    },
    {
        id: 30,
        text: "Which actions are best practices for an AWS account root user? (Choose two.)",
        options: [
        "Share root user credentials with team members.",
        "Create multiple root users for the account, separated by environment.",
        "Enable multi-factor authentication (MFA) on the root user.",
        "Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user.",
        "Use programmatic access instead of the root user and password.",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 3],
        explanation: "Enabling MFA adds an extra layer of security to protect the root user account. It is also recommended to create an IAM user with necessary permissions for daily tasks rather than using the root user to maintain better security and accountability. Here are the Multiple Choice Questions (31-70) extracted from the provided PDF, formatted as requested. AWS Mock Test Questions 31-70"
    },
    {
        id: 31,
        text: "A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes. Which solution will meet these requirements?",
        options: [
        "Create a read replica of the DB instance.",
        "Create a template of the DB instance by using AWS CloudFormation.",
        "Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3.",
        "Modify the DB instance to be a Multi-AZ deployment.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 32,
        text: "A company plans to migrate its application to AWS and run the application on Amazon EC2 instances. The application will have continuous usage for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
        options: [
        "Reserved Instances",
        "Spot Instances",
        "On-Demand Instances",
        "Dedicated Hosts",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Reserved Instances are well-suited for applications with steady, predictable workloads over a term commitment, such as one year."
    },
    {
        id: 33,
        text: "A company needs to transfer data between an Amazon S3 bucket and an on-premises application. Who is responsible for the security of this data, according to the AWS shared responsibility model?",
        options: [
        "The company",
        "AWS",
        "Firewall vendor",
        "AWS Marketplace partner",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The company (customers) is responsible to protect their own data."
    },
    {
        id: 34,
        text: "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
        options: [
        "Security",
        "Reliability",
        "Performance efficiency",
        "Cost optimization",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The Reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to. This includes the ability to operate and test the workload through its total lifecycle."
    },
    {
        id: 35,
        text: "A company wants to identify Amazon S3 buckets that are shared with another AWS account. Which AWS service or feature will meet these requirements?",
        options: [
        "AWS Lake Formation",
        "IAM credential report",
        "Amazon CloudWatch",
        "IAM Access Analyzer",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "IAM Access Analyzer external access analyzers help identify resources in your organization and accounts that are shared with an external entity."
    },
    {
        id: 36,
        text: "Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights?",
        options: [
        "Amazon Athena",
        "Amazon Kendra",
        "Amazon QuickSight",
        "Amazon Redshift",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon QuickSight is the AWS service that gives users the ability to create interactive business intelligence (BI) dashboards that can include machine learning insights."
    },
    {
        id: 37,
        text: "Which of the following is an AWS value proposition that describes a user's ability to scale infrastructure based on demand?",
        options: [
        "Speed of innovation",
        "Resource elasticity",
        "Decoupled architecture",
        "Global deployment",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Elasticity is the ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you want to do this automatically."
    },
    {
        id: 38,
        text: "Which action is a security best practice for access to sensitive data that is stored in an Amazon S3 bucket?",
        options: [
        "Enable S3 Cross-Region Replication (CRR) on the S3 bucket.",
        "Use IAM roles for applications that require access to the S3 bucket.",
        "Configure AWS WAF to prevent unauthorized access to the S3 bucket.",
        "Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 39,
        text: "A company wants to know more about the benefits offered by cloud computing. The company wants to understand the operational advantage of agility. How does AWS provide agility for users?",
        options: [
        "The ability the ensure high availability by deploying workloads to multiple regions",
        "A pay-as-you-go model for many services and resources",
        "The ability to transfer infrastructure management to the AWS Cloud",
        "The ability to provision and deprovision resources quickly with minimal effort",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 40,
        text: "A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement?",
        options: [
        "AWS Identity and Access Management (IAM)",
        "Amazon Cognito",
        "AWS IAM Identity Center (AWS Single Sign-On)",
        "AWS CLI",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Cognito supports authentication with identity providers (IdPs) through Security Assertion Markup Language 2.0 (SAML 2.0). You can use an IdP that supports SAML with Amazon Cognito to provide a simple onboarding flow for your users."
    },
    {
        id: 41,
        text: "Which AWS service should users use to learn about AWS service availability and operations?",
        options: [
        "Amazon EventBridge",
        "AWS Service Catalog",
        "AWS Control Tower",
        "AWS Health Dashboard",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Health Dashboard provides personalized information about AWS service health events that might affect your resources."
    },
    {
        id: 42,
        text: "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?",
        options: [
        "VPC Flow Logs",
        "Amazon Inspector",
        "VPC endpoint services",
        "NAT gateway",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
    },
    {
        id: 43,
        text: "What is the customer ALWAYS responsible for managing, according to the AWS shared responsibility model?",
        options: [
        "Software licenses",
        "Networking",
        "Customer data",
        "Encryption keys",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 44,
        text: "Which AWS service can be used to retrieve compliance reports on demand?",
        options: [
        "AWS Secrets Manager",
        "AWS Artifact",
        "AWS Security Hub",
        "AWS Certificate Manager",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 45,
        text: "Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates?",
        options: [
        "AWS WAF",
        "AWS Trusted Advisor",
        "Amazon Inspector",
        "AWS Shield",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 46,
        text: "A company plans to migrate to the AWS Cloud. The company is gathering information about its on-premises infrastructure and requires information such as the hostname, IP address, and MAC address. Which AWS service will meet these requirements?",
        options: [
        "AWS DataSync",
        "AWS Application Migration Service",
        "AWS Application Discovery Service",
        "AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Application Discovery Service collects both server and database configuration information. Server information includes hostnames, IP addresses, MAC addresses, as well as resource allocation details."
    },
    {
        id: 47,
        text: "Which action will help increase security in the AWS Cloud?",
        options: [
        "Enable programmatic access for all IAM users.",
        "Use IAM users instead of IAM roles to delegate permissions.",
        "Rotate access keys on a reoccurring basis.",
        "Use inline policies instead of customer managed policies.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "IAM access keys work as credentials for programmatic access. Credentials should be rotated or changed on a periodic time frame. For this reason, it is considered a security best practice to rotate access keys."
    },
    {
        id: 48,
        text: "A company is planning to migrate its application to the AWS Cloud. Which AWS tool or set of resources should the company use to analyze and assess its readiness for migration?",
        options: [
        "AWS Cloud Adoption Framework (AWS CAF)",
        "AWS Pricing Calculator",
        "AWS Well-Architected Framework",
        "AWS Budgets",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The AWS Cloud Adoption Framework (AWS CAF) is designed to help organizations develop an effective strategy for adopting the AWS Cloud. It provides a comprehensive framework that can help organizations assess their readiness and plan their migration strategy effectively."
    },
    {
        id: 49,
        text: "Which of the following describes some of the core functionality of Amazon S3?",
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
        id: 50,
        text: "Which AWS benefit is demonstrated by on-demand technology services that enable companies to replace upfront fixed expenses with variable expenses?",
        options: [
        "High availability",
        "Economies of scale",
        "Pay-as-you-go pricing",
        "Global reach",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 51,
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
        explanation: "AWS VPN connects your on-premises networks and remote workers to the cloud. AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable."
    },
    {
        id: 52,
        text: "A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
        options: [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Aurora",
        "Amazon Redshift",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "DynamoDB is a fully managed Non-relational database in AWS."
    },
    {
        id: 53,
        text: "Which actions are examples of a company's effort to rightsize its AWS resources to control cloud costs? (Choose two.)",
        options: [
        "Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets.",
        "Base the selection of Amazon EC2 instance types on past utilization patterns.",
        "Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers.",
        "Use Multi-AZ deployments for Amazon RDS.",
        "Replace existing Amazon EC2 instances with AWS Elastic Beanstalk.",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 2],
        explanation: ""
    },
    {
        id: 54,
        text: "Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?",
        options: [
        "Network ACLs",
        "Security groups",
        "AWS Trusted Advisor",
        "AWS WAF",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Security groups = EC2 access control. Network ACLs = VPC access control."
    },
    {
        id: 55,
        text: "Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.)",
        options: [
        "Perform operations as code.",
        "Enable traceability.",
        "Automatically scale to meet demand.",
        "Deploy resources globally to improve response time.",
        "Automatically recover from failure.",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 4],
        explanation: "Automatically scale to meet demand and Automatically recover from failure are design principles for reliability."
    },
    {
        id: 56,
        text: "A company that uses AWS needs to transfer 2 TB of data. Which type of transfer of that data would result in no cost for the company?",
        options: [
        "Inbound data transfer from the internet",
        "Outbound data transfer to the internet",
        "Data transfer between AWS Regions",
        "Data transfer between Availability Zones",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "There is no charge for inbound data transfer across all services in all Regions."
    },
    {
        id: 57,
        text: "A company wants to create templates that the company can reuse to deploy multiple AWS resources. Which AWS service or feature can the company use to meet this requirement?",
        options: [
        "AWS Marketplace",
        "Amazon Machine Image (AMI)",
        "AWS CloudFormation",
        "AWS OpsWorks",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS CloudFormation allows users to define and provision AWS infrastructure and resources using templates."
    },
    {
        id: 58,
        text: "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?",
        options: [
        "AWS Step Functions",
        "Amazon Simple Notification Service (Amazon SNS)",
        "Amazon Kinesis Data Streams",
        "Amazon Simple Queue Service (Amazon SQS)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon SQS FIFO queues preserve the order in which messages are sent and received, and ensure that the messages are processed in first-in, first-out (FIFO) order."
    },
    {
        id: 59,
        text: "Which AWS service or feature is a browser-based, pre-authenticated service that can be launched directly from the AWS Management Console?",
        options: [
        "AWS API",
        "AWS Lightsail",
        "AWS Cloud9",
        "AWS CloudShell",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS CloudShell is a browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console."
    },
    {
        id: 60,
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
        explanation: "Amazon Aurora PostgreSQL is fully managed and PostgreSQL-compatible. Amazon RDS also supports PostgreSQL engines."
    },
    {
        id: 61,
        text: "A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements?",
        options: [
        "AWS IoT Core",
        "Amazon Lightsail",
        "AWS Storage Gateway",
        "AWS Snowball Edge",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "You can import or export data between your local environments and Amazon S3, and physically transport the data with one or more devices without using the internet (Snowball Edge)."
    },
    {
        id: 62,
        text: "A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages. Which AWS service or feature will give the application permission to access required AWS services?",
        options: [
        "AWS Certificate Manager (ACM)",
        "IAM roles",
        "AWS Security Hub",
        "Amazon GuardDuty",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 63,
        text: "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
        options: [
        "AWS CloudFormation",
        "AWS Elastic Beanstalk",
        "Amazon EC2",
        "AWS OpsWorks",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Elastic Beanstalk is used for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, etc."
    },
    {
        id: 64,
        text: "A company needs a content delivery network that provides secure delivery of data, videos, applications, and APIs to users globally with low latency and high transfer speeds. Which AWS service meets these requirements?",
        options: [
        "Amazon CloudFront",
        "Elastic Load Balancing",
        "Amazon S3",
        "Amazon Elastic Transcoder",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 65,
        text: "A company needs to use third-party software for its workload on AWS. Which AWS service or feature can the company use to purchase the software?",
        options: [
        "AWS Resource Access Manager",
        "AWS Managed Services",
        "AWS License Manager",
        "AWS Marketplace",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Marketplace allows you to discover, deploy, and manage software that runs on AWS."
    },
    {
        id: 66,
        text: "A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service will meet these requirements?",
        options: [
        "Amazon S3",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon FSx for Windows File Server",
        "Amazon Elastic Block Store (Amazon EBS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon FSx for Windows File Server provides file storage that is accessible over the industry-standard Server Message Block (SMB) protocol."
    },
    {
        id: 67,
        text: "A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations. Which AWS service should the company use to meet these requirements?",
        options: [
        "AWS Firewall Manager",
        "Amazon GuardDuty",
        "Amazon Detective",
        "AWS WAF",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Firewall Manager is a security management service that allows you to centrally configure and manage firewall rules across your accounts."
    },
    {
        id: 68,
        text: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
        options: [
        "Configure identity and access management for applications.",
        "Manage encryption options for data that is stored on AWS.",
        "Configure security groups for Amazon EC2 instances.",
        "Maintain the physical hardware of the infrastructure.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Maintain the physical hardware of the infrastructure is an AWS responsibility."
    },
    {
        id: 69,
        text: "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?",
        options: [
        "VPC endpoint",
        "NAT gateway",
        "Amazon PrivateLink",
        "VPC peering",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "A NAT Gateway is an AWS service that allows a private subnet to have access to the Internet, but prevents the Internet from initiating a connection directly to the instances."
    },
    {
        id: 70,
        text: "Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
        options: [
        "Securing the virtualization layer",
        "Patching the operating system on Amazon EC2 instances",
        "Enforcing a strict password policy for IAM users",
        "Patching the operating system on Amazon RDS instances",
        "Configuring security groups and network ACLs",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: ""
    },
];

export const awsCCPQuestions4: Question[] = [
    {
        id: 1,
        text: "A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?",
        options: [
        "S3 Standard",
        "S3 Glacier Flexible Retrieval",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "S3 Glacier Flexible Retrieval is designed for long-term archival of data that is infrequently accessed and where retrieval times of several hours are acceptable. It is the most cost-effective storage class for data retained for months or years. Data retrieval times can range from a few minutes to several hours, which fits the 12-hour requirement."
    },
    {
        id: 2,
        text: "Which AWS service or resource can be used to identify services that have been used by a user within a specified date range?",
        options: [
        "Amazon S3 access control lists (ACLs)",
        "AWS Certificate Manager (ACM)",
        "Network Access Analyzer",
        "AWS Identity and Access Management Access Analyzer",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "IAM Access Analyzer is integrated with AWS CloudTrail, a service that provides a record of actions taken by a user, role, or an AWS service."
    },
    {
        id: 3,
        text: "A company needs to engage third-party consultants to help maintain and support its AWS environment and the company's business needs. Which AWS service or resource will meet these requirements?",
        options: [
        "AWS Support",
        "AWS Organizations",
        "AWS Service Catalog",
        "AWS Partner Network (APN)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "The AWS Partner Network (APN) is designed to help companies find qualified third-party consultants, software vendors, and managed service providers who are specialized in working with AWS services."
    },
    {
        id: 4,
        text: "A company wants to create Amazon QuickSight dashboards every week by using its billing data. Which AWS feature or tool can the company use to meet these requirements?",
        options: [
        "AWS Cost Explorer",
        "AWS Cost and Usage Report",
        "AWS Cost Anomaly Detection",
        "AWS Private",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "After you create a Cost and Usage Report, AWS sends your report to the Amazon S3 bucket that you specify. You can choose to configure your report data for integration with Amazon Athena, Amazon Redshift, or Amazon QuickSight."
    },
    {
        id: 5,
        text: "A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?",
        options: [
        "AWS Storage Gateway",
        "AWS Snowcone",
        "AWS Backup",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Storage Gateway is a service that connects on-premises storage systems to AWS Cloud Storage Systems. It offers several deployment options, including an option that provides locally cached Cloud Storage."
    },
    {
        id: 6,
        text: "A company needs to organize its resources and track AWS costs on a detailed level. The company needs to categorize costs by business department, environment, and application. Which solution will meet these requirements?",
        options: [
        "Access the AWS Cost Management console to organize resources, set an AWS budget, and receive notifications.",
        "Use tags to organize the resources. Activate cost allocation tags to track AWS costs on a detailed level",
        "Create Amazon CloudWatch dashboards to visually organize and track costs individually.",
        "Access the AWS Billing and Cost Management dashboard to organize and track resource consumption on a detailed level.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "To effectively organize resources and track AWS costs based on business department, environment, and application, the most suitable solution is to use tags to organize the resources and activate cost allocation tags. AWS aggregates costs based on these tags, providing granular insights."
    },
    {
        id: 7,
        text: "A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS. Which AWS service can the company use to meet this requirement?",
        options: [
        "AWS Step Functions",
        "AWS Service Catalog",
        "Amazon Simple Queue Service (Amazon SQS)",
        "AWS Batch",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Batch is a fully managed batch computing service that plans, schedules, and runs containerized batch workloads across the full range of AWS compute offerings."
    },
    {
        id: 8,
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
        explanation: "Amazon Route 53 is a highly available DNS service that supports routing policies enabling failover across different AWS Regions. AWS Global Accelerator improves performance by sending user traffic to the closest healthy endpoint and supports failover across different AWS Regions."
    },
    {
        id: 9,
        text: "Which of the following is a way to use Amazon EC2 Auto Scaling groups to scale capacity in the AWS Cloud?",
        options: [
        "Scale the number of EC2 instances in or out automatically, based on demand",
        "Use serverless EC2 instances.",
        "Scale the size of EC2 instances up or down automatically, based on demand.",
        "Transfer unused CPU resources between EC2 instances.",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The size of an Auto Scaling group depends on the number of instances that you set as the desired capacity. You can adjust its size to meet demand, either manually or by using automatic scaling."
    },
    {
        id: 10,
        text: "Which abilities are benefits of the AWS Cloud? (Choose two.)",
        options: [
        "Trade variable expenses for capital expenses.",
        "Deploy globally in minutes",
        "Plan capacity in advance of deployments.",
        "Take advantage of economies of scale",
        "Reduce dependencies on network connectivity.",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 3],
        explanation: "The benefits of the AWS Cloud include the ability to deploy globally in minutes and to take advantage of economies of scale."
    },
    {
        id: 11,
        text: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
        options: [
        "Amazon Inspector",
        "AWS Web Application Firewall (AWS WAF)",
        "Elastic Load Balancing (ELB)",
        "AWS Shield",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Shield maximizes application availability and responsiveness with managed DDoS protection."
    },
    {
        id: 12,
        text: "Which AWS service allows users to model and provision AWS resources using common programming languages?",
        options: [
        "AWS CloudFormation",
        "AWS CodePipeline",
        "AWS Cloud Development Kit (AWS CDK)",
        "AWS Systems Manager",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Cloud Development Kit (AWS CDK) lets users define cloud infrastructure using programming languages like TypeScript, Python, Java, and C#. It simplifies provisioning AWS resources by enabling developers to write infrastructure as code (IaC) in familiar languages."
    },
    {
        id: 13,
        text: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
        options: [
        "Reserved Instances",
        "On-Demand",
        "Dedicated Hosts",
        "Spot Instances",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Spot Instances use unused Amazon EC2 computing capacity and offer cost savings of up to 90% off of On-Demand prices."
    },
    {
        id: 14,
        text: "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
        options: [
        "Network access control list",
        "Security groups",
        "AWS Trusted Advisor",
        "Virtual private gateways",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Security groups act as a virtual firewall for your instances to control inbound and outbound traffic. They allow you to specify rules that control the traffic to and from your instances."
    },
    {
        id: 15,
        text: "A company must be able to develop, test, and launch an application in the AWS Cloud quickly. Which advantage of cloud computing will meet these requirements?",
        options: [
        "Stop guessing capacity",
        "Trade fixed expense for variable expense",
        "Achieve economies of scale",
        "Increase speed and agility",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Increasing speed and agility allows companies to develop, test, and launch applications quickly in the AWS Cloud."
    },
    {
        id: 16,
        text: "A company has teams that have different job roles and responsibilities. The company's employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities. Which IAM resource should the company use to meet this requirement with the LEAST operational overhead?",
        options: [
        "IAM user groups",
        "IAM roles",
        "IAM instance profiles",
        "IAM policies for individual users",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "IAM user groups allow you to group users with similar job roles. When an employee changes teams, you can simply add or remove them from relevant user groups, and the permissions associated with the group will be applied automatically."
    },
    {
        id: 17,
        text: "Which AWS service can a company use to securely store and encrypt passwords for a database?",
        options: [
        "AWS Shield",
        "AWS Secrets Manager",
        "AWS Identity and Access Management (IAM)",
        "Amazon Cognito",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Secrets Manager is designed for securely storing, retrieving, and managing sensitive information such as database credentials. It provides built-in encryption and integrates with AWS IAM."
    },
    {
        id: 18,
        text: "What can a cloud practitioner use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?",
        options: [
        "AWS Certificate Manager",
        "AWS Systems Manager",
        "AWS Artifact",
        "Amazon Inspector",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Artifact is a portal that provides access to AWS security and compliance documents, including reports and certifications."
    },
    {
        id: 19,
        text: "A company wants to integrate its online shopping website with social media login credentials. Which AWS service can the company use to make this integration?",
        options: [
        "AWS Directory Service",
        "AWS Identity and Access Management (IAM)",
        "Amazon Cognito",
        "AWS IAM Identity Center (AWS Single Sign-On)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Cognito provides user identity and data synchronization services that can be used to integrate social media login functionality into applications and websites."
    },
    {
        id: 20,
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
        explanation: "Amazon S3 applies server-side encryption with Amazon S3 managed keys (SSE-S3) as the base level of encryption. You can also choose to configure buckets to use server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)."
    },
    {
        id: 21,
        text: "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
        options: [
        "AWS Shield",
        "AWS Config",
        "AWS IAM",
        "Amazon Inspector",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Config helps with auditing and recording compliance of your AWS resources and helps record configurations and changes over time."
    },
    {
        id: 22,
        text: "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
        options: [
        "3 hours, 5 minutes",
        "3 hours, 5 minutes, and 6 seconds",
        "3 hours, 6 minutes",
        "4 hours",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "With On-Demand Instances, you pay for compute capacity by the second. You pay only for the seconds that your On-Demand Instances are in the running state."
    },
    {
        id: 23,
        text: "A company website is experiencing DDoS attacks. Which AWS service can help protect the company website against these attacks?",
        options: [
        "AWS Resource Access Manager",
        "AWS Amplify",
        "AWS Shield",
        "Amazon GuardDuty",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Shield helps maximize application availability and responsiveness with managed DDoS protection."
    },
    {
        id: 24,
        text: "A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in the AWS Cloud. Which AWS service or tool will meet these requirements?",
        options: [
        "AWS Trusted Advisor",
        "Amazon Inspector",
        "AWS Control Tower",
        "Migration Evaluator",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Migration Evaluator provides the insights you need to build a data-driven business case for migration to AWS, helping define next steps in your migration journey."
    },
    {
        id: 25,
        text: "A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes. Which AWS service or tool should the company use to meet these requirements?",
        options: [
        "AWS Organizations",
        "Cost Explorer",
        "AWS Budgets",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Organizations allows you to consolidate multiple AWS accounts into an organization that you create and centrally manage. It enables automation of account creation, application of Service Control Policies (SCPs), and simplified billing."
    },
    {
        id: 26,
        text: "A company is hosting an application in the AWS Cloud. The company wants to verify that underlying AWS services and general AWS infrastructure are operating normally. Which combination of AWS services can the company use to gather the required information? (Choose two.)",
        options: [
        "AWS Personal Health Dashboard",
        "AWS Systems Manager",
        "AWS Trusted Advisor",
        "AWS Service Health Dashboard",
        "AWS Service Catalog",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: "The Service Health Dashboard provides the status of AWS services in general, whereas the Personal Health Dashboard gives you a personalized look into the availability and performance of the AWS services that you are using."
    },
    {
        id: 27,
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
        id: 28,
        text: "Which cloud concept is demonstrated by using AWS Compute Optimizer?",
        options: [
        "Security validation",
        "Rightsizing",
        "Elasticity",
        "Global reach",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Compute Optimizer analyzes utilization metrics of your Amazon EC2 instances and provides recommendations for rightsizing them to improve performance and reduce costs."
    },
    {
        id: 29,
        text: "A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive. Which AWS service will meet the requirement?",
        options: [
        "Amazon Inspector",
        "Amazon Macie",
        "AWS Identity and Access Management (IAM)",
        "Amazon CloudWatch",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to automatically discover, classify, and protect sensitive data stored in Amazon S3."
    },
    {
        id: 30,
        text: "A user has a stateful workload that will run on Amazon EC2 for the next 3 years. What is the MOST cost-effective pricing model for this workload?",
        options: [
        "On-Demand Instances",
        "Reserved Instances",
        "Dedicated Instances",
        "Spot Instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Reserved Instances (RIs) allow you to commit to a specific instance type in a specific AWS region for a term of 1 or 3 years, in exchange for a significant discount compared to On-Demand pricing. Since the workload is expected to run continuously for 3 years, this provides the most cost savings."
    },
    {
        id: 31,
        text: "Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?",
        options: [
        "AWS Support",
        "AWS customers -correct",
        "AWS Key Management Service (AWS KMS)",
        "AWS Trusted Advisor explanation: The answer is B. The customer has to select AWS KMS. If the customer does not explicit select it then nothing will be encrypted. The question asks \"who enables encryption\" not what is used to encrypt. Therefore, since the user has to enable the service the answer should be B the user.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 32,
        text: "What can a user accomplish using AWS CloudTrail?",
        options: [
        "Generate an IAM user credentials report",
        "Record API calls made to AWS services -correct",
        "Assess the compliance of AWS resource configurations with policies and guidelines.",
        "Ensure that Amazon EC2 Instances are patched with the latest security updates. explanation: AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records API calls made on your account, including who made the call, the services used, the actions performed, and when they occurred. This information is valuable for security analysis, resource change tracking, and troubleshooting.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 33,
        text: "A company is planning to host its workloads on AWS. Which AWS service requires the company to update and patch the guest operating system?",
        options: [
        "Amazon DynamoDB",
        "Amazon S3",
        "Amazon EC2 -correct",
        "Amazon Aurora explanation: Amazon EC2 (Elastic Compute Cloud) is the AWS service that provides resizable compute capacity in the cloud. When you use EC2 instances, you have control over the guest operating system, and it is your responsibility to update and patch the operating system.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 34,
        text: "Which AWS service or feature will search for and identify AWS resources that are shared externally?",
        options: [
        "Amazon OpenSearch Service",
        "AWS Control Tower",
        "AWS IAM Access Analyzer -correct",
        "AWS Targets explanation: AWS IAM Access Analyzer is a service that helps you identify and manage access permissions in your AWS environment. It includes the ability to analyze resource policies to check for unintended external sharing of resources. Access Analyzer can identify AWS resources that are shared externally, providing insights into potential security risks and allowing you to adjust access policies accordingly.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 35,
        text: "A company is migrating its workloads to the AWS Cloud. The company must retain full control of patch management for the guest operating systems that host its applications. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon Lambda",
        "Amazon Aurora",
        "AWS Batch",
        "Amazon EC2 -correct explanation: Amazon EC2 (Elastic Compute Cloud) allows the company to retain full control over the guest operating systems, including patch management. With EC2, you have the flexibility to choose the operating system, configure security settings, and apply patches as needed. This level of control is suitable for scenarios where the company wants to manage the entire software stack, including the operating system.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 36,
        text: "Which AWS service can a company use to visually design and build serverless applications?",
        options: [
        "AWS Lambda",
        "AWS Application Composer -correct",
        "AWS Batch",
        "AWS Runner explanation: AWS Application Composer helps you visually compose and configure AWS services into serverless applications backed by infrastructure as code.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 37,
        text: "A company wants to migrate to AWS and use the same security software it uses on premises. The security software vendor offers its security software as a service on AWS. Where can the company purchase the security solution?",
        options: [
        "AWS Partner Solutions Finder",
        "AWS Support Center",
        "AWS Management Console",
        "AWS Marketplace -correct explanation: AWS Marketplace",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 38,
        text: "A company has deployed an Amazon EC2 instance. Which option is an AWS responsibility under the AWS shared responsibility model?",
        options: [
        "Managing encryption options",
        "Configuration of security groups",
        "Configuration of infrastructure devices -correct",
        "Installing updates and security patches of guest operating system explanation: Configuration of infrastructure devices",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 39,
        text: "At what support level do users receive access to a support concierge?",
        options: [
        "Basic Support",
        "Developer Support",
        "Business Support",
        "Enterprise Support -correct explanation: Users receive access to a support concierge at the Enterprise Support level. With AWS Enterprise Support, customers have access to a support concierge who can help with case management, provide guidance on best practices, and assist with various AWS-related inquiries. This level of support is designed for organizations with mission-critical workloads and larger-scale AWS implementations.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 40,
        text: "A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?",
        options: [
        "PostgreSQL on Amazon EC2",
        "Amazon RDS for PostgreSQL",
        "Amazon Aurora PostgreSQL-Compatible Edition",
        "Amazon Aurora Serverless -correct explanation: If cost is not a concern and you want the least management overhead, Amazon Aurora Serverless would be the best option. Amazon Aurora Serverless provides the highest level of automation and scalability as it is a serverless database solution. You don't have to worry about managing database instances, scaling, or maintenance. The database automatically scales up and down to meet your application's requirements, and you only pay for the resources you actually use.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 41,
        text: "A company is using Amazon DynamoDB for its application database. Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
        options: [
        "Classify data.",
        "Configure access permissions.",
        "Manage encryption options.",
        "Provide public endpoints to store and retrieve data -correct",
        "Manage the infrastructure layer and the operating system -correct explanation: AWS responsibility \"Security of the Cloud\" - AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 42,
        text: "A company wants to create a globally accessible ecommerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service will meet these requirements?",
        options: [
        "Amazon EC2",
        "Amazon VPC",
        "Amazon Route 53 -correct",
        "Amazon RDS explanation: Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 43,
        text: "Which maintenance task is the customer's responsibility, according to the AWS shared responsibility model?",
        options: [
        "Physical connectivity among Availability Zones",
        "Network switch maintenance",
        "Hardware updates and firmware patches",
        "Amazon EC2 updates and security patches -correct explanation: Customers that deploy an Amazon EC2 instance are responsible for management of the guest operating system (including updates and security patches)",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 44,
        text: "A company wants to improve its security posture by reviewing user activity through API calls. Which AWS service will meet this requirement?",
        options: [
        "AWS WAF",
        "Amazon Detective",
        "Amazon CloudWatch",
        "AWS CloudTrail -correct explanation: AWS CloudTrail: Records or logs transactions. You can use API calls to provision, manage, and configure your AWS resources. With CloudTrail, you can view a complete history of user activity and API calls for your applications and resources (API caller, timeframe, Source IP, etc.).",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 45,
        text: "A company is migrating to the AWS Cloud and plans to run experimental workloads for 3 to 6 months on AWS. Which pricing model will meet these requirements?",
        options: [
        "Use Savings Plans for a 3-year term.",
        "Use Dedicated Hosts.",
        "Buy Reserved Instances.",
        "Use On-Demand Instances. -correct explanation: On-Demand Instances provide flexibility and require no upfront commitment. You pay for the compute capacity by the hour or by the second, with no long-term contracts or upfront payments. This model is ideal for short-term workloads, experimental projects, or situations where the workload's duration is uncertain. It allows you to scale up or down as needed without any commitments, making it the most appropriate choice for the company's requirements.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 46,
        text: "A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
        options: [
        "Replace the EC2 instances with AWS Lambda functions",
        "Use AWS Infrastructure Event Management (IEM) support. -correct",
        "Submit a request on AWS Marketplace to monitor the event.",
        "Review the coverage reports in the AWS Cost Management console explanation: AWS Infrastructure Event Management (IEM) support helps customers prepare for and respond to events that could impact their AWS infrastructure, such as product launches or traffic spikes. It provides proactive guidance, best practices, and recommendations tailored to the company's specific situation and requirements. By leveraging IEM support, the company can ensure that its AWS infrastructure is properly",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 47,
        text: "A company wants a time-series database service that makes it easier to store and analyze trillions of events each day. Which AWS service will meet this requirement?",
        options: [
        "Amazon Neptune",
        "Amazon Timestream -correct",
        "Amazon Forecast",
        "Amazon DocumentDB (with MongoDB compatibility) explanation: Amazon Timestream is a fast, scalable, and serverless time series database service for IoT and operational applications that makes it easy to store and analyze trillions of events per day up to 1,000 times faster and at as little as 1/10th the cost of relational databases.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 48,
        text: "A company that has multiple business units wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?",
        options: [
        "Use AWS Organizations and create one account for each business unit. -correct",
        "Use a spreadsheet to control the owners and cost of each resource.",
        "Use an Amazon DynamoDB table to record costs for each business unit.",
        "Use the AWS Billing console to assign owners to resources and track costs. explanation: AWS Organizations allows you to centrally manage and govern multiple AWS accounts. By creating separate AWS accounts for each business unit, the company can easily separate and track costs for each unit. AWS provides consolidated billing, which aggregates the charges for all linked accounts in a single bill while still allowing detailed cost reporting at the account level. This approach provides a clean separation of costs for each business unit with minimal operational overhead.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 49,
        text: "Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?",
        options: [
        "Configuration management -correct",
        "Physical and environmental controls",
        "Data integrity authentication",
        "Identity and access management explanation: Configuration Management – AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 50,
        text: "A company often does not use all of its current Amazon EC2 capacity to run stateless workloads. The company wants to optimize its EC2 costs. Which EC2 instance type will meet these requirements?",
        options: [
        "Spot Instances -correct",
        "Dedicated Instances",
        "Reserved Instances",
        "On-Demand Instances explanation: Spot Instances are recommended for stateless, fault-tolerant, flexible applications.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 51,
        text: "A company wants to store data in Amazon S3. The company rarely accesses the data, and the data can be regenerated if necessary. Which Amazon S3 storage class will meet this requirement?",
        options: [
        "S3 Standard",
        "S3 Glacier Instant Retrieval",
        "S3 Intelligent-Tiering",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA) -correct explanation: For a scenario where data is rarely accessed, and the company can regenerate it if necessary, S3 One Zone-Infrequent Access (S3 One Zone-IA) is appropriate. This storage class is for infrequently accessed data but with lower availability (single AZ). It provides cost savings compared to S3 Standard-IA while accepting the risk of data loss in case of AZ failure.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 52,
        text: "A company has migrated its workloads to AWS. The company wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?",
        options: [
        "AWS Cloud Adoption Framework (AWS CAF)",
        "AWS Managed Services (AMS) -correct",
        "AWS Well-Architected Framework",
        "AWS Migration Hub explanation: AWS Managed Services (AMS) helps you adopt AWS at scale and operate more efficiently and securely. We leverage standard AWS services and offer operational guidance with specialized automations, skills, and experience that are contextual to your environment and applications.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 53,
        text: "A company wants to provision and manage its AWS infrastructure by using the common programming languages Typescript, Python, Java, and .NET. Which AWS service will meet this requirement?",
        options: [
        "AWS CloudFormation",
        "AWS CodeBuild",
        "AWS CLI",
        "AWS Cloud Development Kit (AWS CDK) -correct explanation: AWS CDK is an open-source software development framework for defining cloud infrastructure in code and provisioning it through AWS CloudFormation. It supports multiple programming languages, including TypeScript, Python, Java, and .NET, allowing developers to use familiar programming languages to define AWS Infrastructure as code.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 54,
        text: "Which Amazon EC2 pricing model provides the MOST cost savings for an always-up, right-sized database server running for a project that will last 1 year?",
        options: [
        "On-Demand Instances",
        "Convertible Reserved Instances",
        "Dedicated Reserved Instances",
        "Standard Reserved Instances -correct explanation: Reserved Instances offer significant cost savings compared to On-Demand Instances, especially for workloads that are expected to run continuously for a long duration, such as a database server for a 1-year project. Standard Reserved Instances provide a discount on the hourly charge for the instance compared to On-Demand pricing, in exchange for committing to a one- or three-year term. Convertible Reserved Instances offer similar savings but provide more flexibility to change the instance type, operating system, or tenancy during the term. However, they may have a slightly higher cost compared to Standard Reserved Instances with a higher availability.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 55,
        text: "A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
        options: [
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon S3",
        "AWS Storage Gateway -correct explanation: AWS Storage Gateway connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between your on-premises IT environment and the AWS storage infrastructure. You can use the service to store data in the Amazon Web Services Cloud for scalable and cost-effective storage that helps maintain data security. AWS Storage Gateway offers file-based File Gateways (Amazon S3 File and Amazon FSx File), volume-based (Cached and Stored), and tape-based storage solutions.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 56,
        text: "A company is using the AWS Free Tier for several AWS services for an application. What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?",
        options: [
        "The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage. -correct",
        "AWS Support will contact the company to set up standard service charges.",
        "The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period.",
        "The company's AWS account will be frozen and can be restarted after a payment plan is established.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 57,
        text: "A company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets its business needs. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?",
        options: [
        "Business",
        "Governance",
        "Platform",
        "Operations -correct explanation: The Operations perspective in AWS CAF focuses on managing and optimizing workloads, ensuring operational excellence, and monitoring performance to meet business requirements. It includes practices related to workload monitoring, performance optimization, incident management, and continuous improvement to ensure that cloud services are delivered effectively and efficiently.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 58,
        text: "A company wants to migrate its applications to the AWS Cloud. The company plans to identify and prioritize any business transformation opportunities and evaluate its AWS Cloud readiness. Which AWS service or tool should the company use to meet these requirements?",
        options: [
        "AWS Cloud Adoption Framework (AWS CAF) -correct",
        "AWS Managed Services (AMS)",
        "AWS Well-Architected Framework",
        "AWS Migration Hub explanation: The AWS CAF is the most suitable resource. It provides guidance that supports each unit within an organization through the process of understanding how to align cloud strategies to business objectives. It helps organizations develop and execute efficient and effective plans for their cloud adoption journey, identifying and prioritizing opportunities for transformation across the business.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 59,
        text: "A company need an AWS service that provides a clear baseline of what the company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS Cloud. What AWS service or tool will meet these requirements?",
        options: [
        "AWS Compute Optimizer",
        "AWS Cost Explorer",
        "AWS Systems Manager Agent (SSM Agent)",
        "Migration Evaluator -correct explanation: Migration Evaluator is a migration assessment service that helps you create a directional business case for AWS cloud planning and migration. To project future-state cloud costs, Migration Evaluator provides (a clear baseline) of what your organization is running today and projects AWS costs based on measured on-premises provisioning and utilization.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 60,
        text: "A company acquired another corporation. The company now has two AWS accounts. Which AWS service or tool can the company use to consolidate the billing for these two accounts?",
        options: [
        "AWS Systems Manager",
        "AWS Organizations -correct",
        "AWS License Manager",
        "Cost Explorer explanation: AWS Organizations is the service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. It helps you to simplify billing by allowing you to consolidate payment methods for all linked accounts. This way, you can benefit from volume discounts and have a centralized view of your AWS spending. It also provides features for policy-based management, which helps you enforce policies across your accounts, among other organizational benefits.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 61,
        text: "A company wants to set up its workloads to perform their intended functions and recover quickly from failure. Which pillar of the AWS Well-Architected Framework aligns with these goals?",
        options: [
        "Performance efficiency",
        "Sustainability",
        "Reliability -correct",
        "Security explanation: The Reliability pillar of the AWS Well-Architected Framework focuses on designing systems that can recover from failures and continue to operate as expected. It includes strategies for fault tolerance, disaster recovery, and resiliency to ensure that workloads can withstand disruptions and maintain availability.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 62,
        text: "Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?",
        options: [
        "Amazon Athena",
        "AWS Glue -correct",
        "Amazon S3",
        "AWS Snowball Edge",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 63,
        text: "A company wants to migrate workloads of data from its on-premises data center to AWS. The company does not want to use an internet connection to perform the migration. Which AWS service will meet these requirements?",
        options: [
        "AWS DataSync",
        "Amazon Connect",
        "AWS Snowmobile -correct",
        "AWS Direct Connect explanation: AWS Snowmobile is an exabyte-scale data transfer service that is used to move large volumes of data to Amazon Web Services. Each Snowmobile allows transfer for up to 100PB of data. It is a 45-foot-long ruggedized shipping container that is pulled by a semi-trailer truck.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 64,
        text: "A company wants to receive alerts to monitor its overall operating costs for its AWS public cloud infrastructure. Which AWS offering will meet these requirements?",
        options: [
        "Amazon EventBridge",
        "Compute Savings Plans",
        "AWS Budgets -correct",
        "Migration Evaluator explanation: AWS Budgets is a service that allows you to set custom cost and usage budgets for your AWS resources and receive alerts when your actual costs or usage exceed the thresholds you defined. You can set up budgets based on various dimensions such as service, linked accounts, tags, and more. By setting up AWS Budgets, the company can define spending thresholds and receive alerts via email or SNS (Simple Notification Service) when their overall operating costs exceed the defined budgets. This allows them to proactively monitor and manage their AWS spending to ensure it stays within desired limits.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 65,
        text: "How does the AWS Enterprise Support Concierge team help users?",
        options: [
        "Supporting application development",
        "Providing architecture guidance",
        "Answering billing and account inquiries -correct",
        "Answering questions regarding technical support cases explanation: The Enterprise Support Concierge is a group of AWS billing and account experts that specialize in working with enterprise accounts. They help with billing and account inquiries.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 66,
        text: "A company wants to run a simulation for 3 years without interruptions. Which Amazon EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
        options: [
        "Spot Instances",
        "Reserved Instances -correct",
        "Dedicated Hosts",
        "On-Demand Instances explanation: Reserved Instances provide cost savings compared to On-Demand Instances, especially for long-term commitments.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 67,
        text: "Which AWS service or resource can provide discounts on some AWS service costs in exchange for a spending commitment?",
        options: [
        "Amazon Detective",
        "AWS Pricing Calculator",
        "Savings Plans -correct",
        "AWS Budgets",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 68,
        text: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
        options: [
        "High availability",
        "Performance efficiency -correct",
        "Cost optimization -correct",
        "Going global in minutes",
        "Continuous development explanation: The 6 pillars are: 1. operational excellence 2. security 3. reliability 4. performance efficiency 5. cost optimization 6. sustainability",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 69,
        text: "A company wants to use Amazon EC2 instances to provide a static website to users all over the world. The company needs to minimize latency for the users. Which solution meets these requirements?",
        options: [
        "Use EC2 instances in multiple edge locations.",
        "Use EC2 instances in the same Availability Zone but in different AWS Regions.",
        "Use Amazon CloudFront with the EC2 instances configured as the source. -correct",
        "Use EC2 instances in the same Availability Zone but in different AWS accounts. explanation: Amazon CloudFront is a content delivery network (CDN) service that accelerates the delivery of your websites, APIs, video content, or other web assets. In this scenario, using Amazon CloudFront is the most suitable option to minimize latency for users all over the world.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
    {
        id: 70,
        text: "A team of researchers is going to collect data at remote locations around the world. Many locations do not have internet connectivity. The team needs to capture the data in the field, and transfer it to the AWS Cloud later. Which AWS service will support these requirements?",
        options: [
        "AWS Outposts",
        "AWS Transfer Family",
        "AWS Snow Family -correct",
        "AWS Migration Hub explanation: The AWS Snow Family is designed for situations where you need to transfer large amounts of data to and from the AWS Cloud but have limited or no internet connectivity. In this scenario, AWS Snow Family devices (such as AWS Snowball or AWS Snowmobile) can be used to physically transfer data.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: ""
    },
];

export const awsCCPQuestions5: Question[] = [
    {
        id: 1,
        text: "Which of the following are benefits that a company receives when it moves an on-premises production workload to AWS? (Choose two.)",
        options: [
        "AWS trains the company's staff on the use of all the AWS services.",
        "AWS manages all security in the cloud.",
        "AWS offers free support from technical account managers (TAMs).",
        "AWS offers high availability.",
        "AWS provides economies of scale.",
    ],
        correctAnswer: 3,
        correctAnswers: [3, 4],
        explanation: "No explanation provided in the document."
    },
    {
        id: 2,
        text: "A company has decided to adopt Amazon EC2 infrastructure and wants to scale various stateless services for short-term usage. Which EC2 pricing model is MOST cost-efficient to meet these requirements?",
        options: [
        "Spot Instances",
        "On-Demand Instances",
        "Reserved Instances",
        "Dedicated Hosts",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "No explanation provided in the document."
    },
    {
        id: 3,
        text: "Which of the following are benefits of AWS Trusted Advisor? (Choose two.)",
        options: [
        "Access to Amazon Simple Queue Service (Amazon SQS)",
        "Cost optimization recommendations",
        "Hourly refresh of the service limit checks",
        "Security checks",
        "AWS Identity and Access Management (IAM) approval management",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 3],
        explanation: "No explanation provided in the document."
    },
    {
        id: 4,
        text: "A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which Amazon S3 feature will meet this requirement?",
        options: [
        "S3 Versioning",
        "S3 Lifecycle",
        "S3 Object Lock",
        "S3 Inventory",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon S3 Lifecycle policies allow you to define rules to automatically transition objects between storage classes or delete them when they are no longer needed. In the context of cost savings and archiving data that is no longer frequently accessed, using S3 Lifecycle policies is the appropriate solution."
    },
    {
        id: 5,
        text: "Which cloud computing advantage is a company applying when it uses AWS Regions to increase application availability to users in different countries?",
        options: [
        "Pay-as-you-go pricing",
        "Capacity forecasting",
        "Economies of scale",
        "Global reach",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "When a company uses AWS Regions to increase application availability to users in different countries, it is leveraging the global reach of cloud computing. AWS Regions are geographically distributed data center clusters, and each Region consists of multiple Availability Zones. Deploying applications across multiple AWS Regions allows companies to provide low-latency access to their services for users in different geographical locations, thereby improving global reach and availability."
    },
    {
        id: 6,
        text: "A company wants an AWS service to collect and process 10 TB of data locally and transfer the data to AWS. The company has intermittent connectivity. Which AWS service will meet these requirements?",
        options: [
        "AWS Database Migration Service (AWS DMS)",
        "AWS DataSync",
        "AWS Backup",
        "AWS Snowball Edge",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Snowball Edge is a type of Snowball device with on-board storage and compute power for select AWS capabilities. Snowball Edge can process data locally, run edge-computing workloads, and transfer data to or from the AWS Cloud."
    },
    {
        id: 7,
        text: "Which of the following is an AWS Well-Architected Framework design principle for operational excellence in the AWS Cloud?",
        options: [
        "Go global in minutes.",
        "Make frequent, small, reversible changes.",
        "Implement a strong foundation of identity and access management",
        "Stop spending money on hardware infrastructure for data center operations.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "There are five design principles for operational excellence in the cloud: Perform operations as code: Make frequent, small, reversible changes: Refine operations procedures frequently: Anticipate failure: Learn from all operational failures:"
    },
    {
        id: 8,
        text: "What is a benefit of using AWS serverless computing?",
        options: [
        "Application deployment and management are not required.",
        "Application security will be fully managed by AWS.",
        "Monitoring and logging are not needed.",
        "Management of infrastructure is offloaded to AWS.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "One of the key benefits of using AWS serverless computing, such as AWS Lambda, is that the management of infrastructure is offloaded to AWS. In a serverless architecture, users can focus on writing code for their applications, and AWS automatically takes care of provisioning and managing the underlying infrastructure. This allows developers to concentrate on building and deploying applications without the need to worry about server provisioning, scaling, or maintenance."
    },
    {
        id: 9,
        text: "A developer wants AWS users to access AWS services by using temporary security credentials. Which AWS service or feature should the developer use to provide these credentials?",
        options: [
        "IAM policies",
        "IAM user groups",
        "AWS Security Token Service (AWS STS)",
        "AWS IAM Identity Center (AWS Single Sign-On)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Security Token Service (AWS STS) as a web service that enables you to request temporary, limited-privilege credentials for users."
    },
    {
        id: 10,
        text: "A global company wants to use a managed security service for protection from SQL injection attacks. The service also must provide detailed logging information about access to the company's ecommerce applications. Which AWS service will meet these requirements?",
        options: [
        "AWS Network Firewall",
        "Amazon RDS for SQL Server",
        "Amazon GuardDuty",
        "AWS WAF",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS WAF (Web Application Firewall) is a web application firewall service that helps protect web applications from common web exploits and attacks, including SQL injection attacks. It allows you to define custom rules and conditions to filter and control inbound web traffic, providing protection against SQL injection attacks. Additionally, AWS WAF provides detailed logging information about access to your web applications, including information about requests, IP addresses, and response codes."
    },
    {
        id: 11,
        text: "A company is migrating its on-premises server to an Amazon EC2 instance. The server must stay active at all times for the next 12 months. Which EC2 pricing option is the MOST cost-effective for the company's workload?",
        options: [
        "On-Demand",
        "Dedicated Hosts",
        "Spot Instances",
        "Reserved Instances",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "No explanation provided in the document."
    },
    {
        id: 12,
        text: "Which of the following is the customer's responsibility under the AWS shared responsibility model? (Choose two.)",
        options: [
        "Maintain the configuration of infrastructure devices.",
        "Maintain patching and updates within the hardware infrastructure.",
        "Maintain the configuration of guest operating systems and applications.",
        "Manage decisions involving encryption options.",
        "Maintain infrastructure hardware.",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "No explanation provided in the document."
    },
    {
        id: 13,
        text: "A company wants to verify if multi-factor authentication (MFA) is enabled for all users within its AWS accounts. Which AWS service or resource will meet this requirement?",
        options: [
        "AWS Cost and Usage Report",
        "IAM credential reports",
        "AWS Artifact",
        "Amazon CloudFront reports",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "IAM credential reports provide a way to audit the status of all your IAM credentials, including the status of MFA devices."
    },
    {
        id: 14,
        text: "A company uses AWS security services and tools. The company needs a service to help manage the security alerts and must organize the alerts into a single dashboard. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon GuardDuty",
        "Amazon Inspector",
        "Amazon Macie",
        "AWS Security Hub",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Security Hub is a cloud security posture management service that automates best practice checks, aggregates alerts, and supports automated remediation."
    },
    {
        id: 15,
        text: "A company wants to run its workloads in the AWS Cloud effectively, reduce management overhead, and improve processes. Which AWS Well-Architected Framework pillar represents these requirements?",
        options: [
        "Reliability",
        "Operational excellence",
        "Performance efficiency",
        "Cost optimization",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The Operational Excellence pillar includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value."
    },
    {
        id: 16,
        text: "A company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service will meet these requirements?",
        options: [
        "Amazon GuardDuty",
        "Amazon Detective",
        "Amazon Macie",
        "AWS Shield",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "It currently supports only Amazon Simple Storage Service (Amazon S3), while other AWS data stores are being developed. In your S3 buckets, Macie can distinguish any personally identifiable information (PII) or protected health information (PHI)."
    },
    {
        id: 17,
        text: "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
        options: [
        "Amazon GuardDuty",
        "AWS Security Hub",
        "AWS Artifact",
        "AWS Shield",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "No explanation provided in the document."
    },
    {
        id: 18,
        text: "An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. What is the SIMPLEST way to provide this information?",
        options: [
        "Create an IAM user account for the auditor, granting the auditor administrator permissions.",
        "Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.",
        "Download the IAM credential report, then provide the report to the auditor.",
        "Download the AWS Trusted Advisor report, then provide the report to the auditor",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "No explanation provided in the document."
    },
    {
        id: 19,
        text: "Which task can a company perform by using security groups in the AWS Cloud?",
        options: [
        "Allow access to an Amazon EC2 instance through only a specific port.",
        "Deny access to malicious IP addresses at a subnet level.",
        "Protect data that is cached by Amazon CloudFront.",
        "Apply a stateless firewall to an Amazon EC2 instance.",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "No explanation provided in the document."
    },
    {
        id: 20,
        text: "A company plans to run a compute-intensive workload that uses graphics processing units (GPUs). Which Amazon EC2 instance type should the company use?",
        options: [
        "Accelerated computing",
        "Compute optimized",
        "Storage optimized",
        "General purpose",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Accelerated computing instances (such as those from the P, G, and F instance families) use GPU units to improve performance in workloads such as graphics and data processing."
    },
    {
        id: 21,
        text: "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)",
        options: [
        "They are stateless",
        "They are stateful.",
        "They evaluate all rules before allowing traffic.",
        "They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic",
        "They operate at the instance level.",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: "A. They are stateless: Network ACLs do not maintain connection state information. Each packet is evaluated independently based on the rules defined in the ACL. D. They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic: Network ACLs evaluate rules sequentially from the lowest numbered rule to the highest numbered rule. Once a rule that matches the traffic is found, further rule processing stops."
    },
    {
        id: 22,
        text: "Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)",
        options: [
        "Performance and capacity management",
        "Data engineering",
        "Continuous integration and continuous delivery (CI/CD)",
        "Infrastructure protection",
        "Change and release management",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 2],
        explanation: "According to AWS, Platform perspectives are: Platform architecture Platform engineering Data architecture Data engineering Provisioning and orchestration Modern application development Continuous integration and continuous delivery"
    },
    {
        id: 23,
        text: "According to the AWS shared responsibility model, the customer is responsible for applying the latest security updates and patches for which of the following?",
        options: [
        "Amazon DynamoDB",
        "Amazon EC2 instances",
        "Amazon RDS instances",
        "Amazon S3",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The customer is responsible for applying the latest security updates and patches to Amazon EC2 instances."
    },
    {
        id: 24,
        text: "Which Amazon S3 storage class is MOST cost-effective for unknown access patterns?",
        options: [
        "S3 Standard",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "S3 Intelligent-Tiering",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "S3 Intelligent-Tiering is the most cost-effective option for unknown access patterns. It automatically moves objects between two access tiers (frequent and infrequent access) based on changing access patterns. This helps optimize costs for data with unknown or changing access patterns."
    },
    {
        id: 25,
        text: "Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)",
        options: [
        "Observability",
        "Incident and problem management",
        "Incident response",
        "Infrastructure protection",
        "Availability and continuity",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 3],
        explanation: "AWS Cloud Adoption Framework - CAF: Security perspective , compliance and assurance , Security Governance , Security Assurance , Data Protection , Application Security , Threat Detection , Vulnerability Mgmt , Identity and Access Mgmt , Incident response , Infrastructure protection"
    },
    {
        id: 26,
        text: "A company has a managed IAM policy that does not grant the necessary permissions for users to accomplish required tasks. How can this be resolved?",
        options: [
        "Enable AWS Shield Advanced",
        "Create a custom IAM policy",
        "Use a third-party web application firewall (WAF) managed rule from the AWS Marketplace.",
        "Use AWS Key Management Service (AWS KMS) to create a customer-managed key",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "If the existing managed IAM policy does not provide the necessary permissions, you can create a custom IAM policy tailored to the specific permissions required by the users. This allows you to define and grant the permissions needed for the tasks."
    },
    {
        id: 27,
        text: "Who is responsible for managing IAM user access and secret keys according to the AWS shared responsibility model?",
        options: [
        "IAM access and secret keys are static, so there is no need to rotate them.",
        "The customer is responsible for rotating keys.",
        "AWS will rotate the keys whenever required.",
        "The AWS Support team will rotate keys when requested by the customer.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "No explanation provided in the document."
    },
    {
        id: 28,
        text: "A company needs to run a pre-installed third-party firewall on an Amazon EC2 instance. Which AWS service or feature can provide this solution?",
        options: [
        "Network ACLs",
        "Security groups",
        "AWS Marketplace",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Marketplace is a digital catalog that includes thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software on AWS – including pre-installed third-party firewalls."
    },
    {
        id: 29,
        text: "Which AWS Cloud benefit gives a company the ability to quickly deploy cloud resources to access compute, storage, and database infrastructures in a matter of minutes?",
        options: [
        "Elasticity",
        "Cost savings",
        "Agility",
        "Reliability",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Agility in cloud computing refers to the ability to quickly develop, test, and launch applications that the business needs."
    },
    {
        id: 30,
        text: "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
        options: [
        "Security awareness and training",
        "Development of an IAM password policy",
        "Patching of the guest operating system",
        "Physical and environmental controls",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "No explanation provided in the document."
    },
    {
        id: 31,
        text: "Which of the following is a characteristic of the AWS account root user?",
        options: [
        "The root user is the only user that can be configured with multi-factor authentication (MFA).",
        "The root user is the only user that can access the AWS Management Console.",
        "The root user is the first sign-in identity that is available when an AWS account is created.",
        "The root user has a password that cannot be changed.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "No explanation provided in the document."
    },
    {
        id: 32,
        text: "An Amazon EC2 instance previously used for development is inaccessible and no longer appears in the AWS Management Console. Which AWS service should be used to determine what action made this EC2 instance inaccessible?",
        options: [
        "Amazon CloudWatch Logs",
        "AWS Security Hub",
        "Amazon Inspector",
        "AWS CloudTraiI",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "No explanation provided in the document."
    },
    {
        id: 33,
        text: "A company's application developers need to quickly provision and manage AWS services by using scripts. Which AWS offering should the developers use to meet these requirements?",
        options: [
        "AWS CLI",
        "AWS CodeBuild",
        "AWS Cloud Adoption Framework (AWS CAF)",
        "AWS Systems Manager Session Manager",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts."
    },
    {
        id: 34,
        text: "A company wants to migrate unstructured data to AWS. The data needs to be securely moved with inflight encryption and end-to-end data validation. Which AWS service will meet these requirements?",
        options: [
        "AWS Application Migration Service",
        "Amazon Elastic File System (Amazon EFS)",
        "AWS DataSync",
        "AWS Migration Hub",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS DataSync is a service designed for securely transferring large amounts of data between on-premises storage and Amazon S3, Amazon EFS, or Amazon FSx for Windows File Server. It supports in-flight encryption and end-to-end data validation during the transfer process. In the context of the question, AWS DataSync is a suitable choice for securely moving unstructured data to AWS while ensuring encryption and data integrity throughout the migration process. Therefore, option C, AWS DataSync, would meet the specified requirements."
    },
    {
        id: 35,
        text: "A development team wants to deploy multiple test environments for an application in a fast, repeatable manner. Which AWS service should the team use?",
        options: [
        "Amazon EC2",
        "AWS CloudFormation",
        "Amazon QuickSight",
        "Amazon Elastic Container Service (Amazon ECS)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "CloudFormation will allow you to use infrastructure as code and allow you to repeat deployments fast and always be the same."
    },
    {
        id: 36,
        text: "A company wants to quickly implement a continuous integration/continuous delivery (CI/CD) pipeline. Which AWS service will meet this requirement?",
        options: [
        "AWS Config",
        "Amazon Cognito",
        "AWS DataSync",
        "AWS CodeStar",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS CodeStar accelerates software release with the help of AWS CodePipeline, a continuous integration and continuous delivery (CI/CD) service"
    },
    {
        id: 37,
        text: "Which AWS Cloud deployment model uses AWS Outposts as part of the application deployment infrastructure?",
        options: [
        "On-premises",
        "Serverless",
        "Cloud-native",
        "Hybrid",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility. It extends AWS infrastructure, services, APIs, and tools to virtually any customer location, allowing for a consistent hybrid experience across on-premises and cloud environments."
    },
    {
        id: 38,
        text: "Which of the following is a fully managed graph database service on AWS?",
        options: [
        "Amazon Aurora",
        "Amazon FSx",
        "Amazon DynamoDB",
        "Amazon Neptune",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon Neptune is a fully managed graph database service that scales to handle billions of relationships and lets you query them with milliseconds latency, at a low cost for that kind of capacity."
    },
    {
        id: 39,
        text: "Which AWS service could an administrator use to provide desktop environments for several employees?",
        options: [
        "AWS Organizations",
        "AWS Fargate",
        "AWS WAF",
        "AWS WorkSpaces",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon WorkSpaces offers an easy way to provide a cloud-based desktop experience to your end users"
    },
    {
        id: 40,
        text: "Which AWS service or feature gives users the ability to capture information about network traffic in a VPC?",
        options: [
        "VPC Flow Logs",
        "Amazon Inspector",
        "VPC route tables",
        "AWS CloudTrail",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
    },
    {
        id: 41,
        text: "Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?",
        options: [
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon EC2 instance store",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon S3",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon EC2 instance store provides temporary block-level storage that is directly attached to the Amazon EC2 instance. It is referred to as \"ephemeral\" because the data stored in the instance store volumes is not persistent and is deleted when the EC2 instance is stopped or terminated."
    },
    {
        id: 42,
        text: "A company wants to provide access to Windows file shares in AWS from its on-premises workloads. The company does not want to provision any additional infrastructure or applications in its data center. Which AWS service will meet these requirements?",
        options: [
        "Amazon FSx File Gateway",
        "AWS DataSync",
        "Amazon S3",
        "AWS Snow Family",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon FSx File Gateway optimizes on-premises access to fully managed, highly reliable file shares in Amazon FSx for Windows File Server."
    },
    {
        id: 43,
        text: "A company wants durable storage for static content and infinitely scalable data storage infrastructure at the lowest cost. Which AWS service should the company choose?",
        options: [
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon S3",
        "AWS Storage Gateway",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon S3 is object storage built to store and retrieve any amount of data from anywhere. S3 is a simple storage service that offers industry leading durability, availability, performance, security, and virtually unlimited scalability at very low costs."
    },
    {
        id: 44,
        text: "An ecommerce company wants to use Amazon EC2 Auto Scaling to add and remove EC2 instances based on CPU utilization. Which AWS service or feature can initiate an Amazon EC2 Auto Scaling action to achieve this goal?",
        options: [
        "Amazon Simple Queue Service (Amazon SQS)",
        "Amazon Simple Notification Service (Amazon SNS)",
        "AWS Systems Manager",
        "Amazon CloudWatch alarm",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon CloudWatch is a monitoring service that provides data and actionable insights for AWS resources. You can set up CloudWatch alarms to monitor metrics, such as CPU utilization, and trigger Auto Scaling actions based on defined thresholds."
    },
    {
        id: 45,
        text: "A company wants to transform its workforce by attracting and developing a digitally fluent high-performance workforce. The company wants to attract a diverse and inclusive workforce with appropriate mix of technical and non-technical skills. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?",
        options: [
        "Business",
        "People",
        "Platform",
        "Operations",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The AWS Cloud Adoption Framework (AWS CAF) has several perspectives, and the \"People\" perspective is focused on workforce transformation, including attracting and developing a digitally fluent high-performance workforce. This perspective emphasizes the importance of organizational culture, skills development, and creating a diverse and inclusive workforce with the right mix of technical and non-technical skills."
    },
    {
        id: 46,
        text: "A company wants to move its on-premises databases to managed cloud database services by using a simplified migration process. Which AWS service or tool can help the company meet this requirement?",
        options: [
        "AWS Storage Gateway",
        "AWS Application Migration Service",
        "AWS DataSync",
        "AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Database Migration Service (DMS) is the service designed to help migrate on-premises databases to managed cloud database services in a simplified manner. It supports various database engines and provides a reliable and efficient way to migrate data with minimal downtime"
    },
    {
        id: 47,
        text: "A company needs a fully managed file server that natively supports Microsoft workloads and file systems. The file server must also support the SMB protocol. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon FSx for Lustre",
        "Amazon FSx for Windows File Server",
        "Amazon Elastic Block Store (Amazon EBS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon FSx for Windows File Server is the AWS service that provides a fully managed file server that natively supports Microsoft workloads and file systems. It is built on Windows Server and supports the Server Message Block (SMB) protocol, making it suitable for seamlessly integrating with Microsoft applications and workloads."
    },
    {
        id: 48,
        text: "A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data into comma-separated values (.csv) files. A developer wants to write a simple query that can read all of these files and generate a summary report. Which AWS service or feature should the developer use to meet these requirements with the LEAST amount of operational overhead?",
        options: [
        "Amazon S3 Select",
        "Amazon Athena",
        "Amazon Redshift",
        "Amazon EC2",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Athena is a serverless query service that allows you to analyze data directly in Amazon S3 using SQL queries. It supports a variety of file formats, including comma-separated values (.csv). With Athena, the developer can write SQL queries to read the .csv files stored in the Amazon S3 bucket and generate the desired summary report without the need to provision or manage infrastructure"
    },
    {
        id: 49,
        text: "Which AWS feature provides a no-cost platform for AWS users to join community groups, ask questions, find answers, and read community-generated articles about best practices?",
        options: [
        "AWS Knowledge Center",
        "AWS re:Post",
        "AWS IQ",
        "AWS Enterprise Support",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS re:Post is a no-cost platform that provides AWS users with a community space to ask questions, find answers, and engage with other users. Users can join community groups, participate in discussions, and read community-generated articles about best practices. It is a part of the AWS Community and allows users to share knowledge and experiences."
    },
    {
        id: 50,
        text: "A company needs to search for text in documents that are stored in Amazon S3. Which AWS service will meet these requirements?",
        options: [
        "Amazon Kendra",
        "Amazon Rekognition",
        "Amazon Polly",
        "Amazon Lex",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon Kendra is an AWS service designed for building intelligent search capabilities into applications. It supports natural language queries and allows you to search for text in documents stored in various sources, including Amazon S3. Kendra is optimized for enterprise-scale data and can index and search across different types of content, making it suitable for searching text in documents"
    },
    {
        id: 51,
        text: "Which AWS services make use of global edge locations? (Choose two.)",
        options: [
        "AWS Fargate",
        "Amazon CloudFront",
        "AWS Global Accelerator",
        "AWS Wavelength",
        "Amazon VPC",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 2],
        explanation: "B. Amazon CloudFront: CloudFront is a content delivery network (CDN) service that uses a global network of edge locations to deliver content, such as web pages, videos, and images, to users with low latency and high transfer speeds. C. AWS Global Accelerator: Global Accelerator is a service that uses a network of AWS edge locations to route traffic over the AWS global network, improving the availability and performance of applications. It provides static IP addresses that act as entry points to your applications hosted in one or more AWS Regions."
    },
    {
        id: 52,
        text: "A user needs a relational database but does not have the resources to manage the hardware, resiliency, and replication. Which AWS service option meets the user's requirements?",
        options: [
        "Run MySQL on Amazon Elastic Container Service (Amazon ECS).",
        "Run MySQL on Amazon EC2.",
        "Choose Amazon RDS for MySQL",
        "Choose Amazon ElastiCache for Redis.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon RDS (Relational Database Service) is a fully managed relational database service that takes care of tasks such as hardware provisioning, database setup, patching, and backups. It provides a managed environment for various database engines, including MySQL. With Amazon RDS for MySQL, users can offload the operational aspects of database management and focus on their application development."
    },
    {
        id: 53,
        text: "A company needs to deploy applications in the AWS Cloud as quickly as possible. The company also needs to minimize the complexity that is related to the management of AWS resources. Which AWS service should the company use to meet these requirements?",
        options: [
        "AWS Config",
        "AWS Elastic Beanstalk",
        "Amazon EC2",
        "Amazon Personalize",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Elastic Beanstalk is a fully managed service that makes it easy to deploy and run applications in multiple languages (such as Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker) on AWS. It abstracts away the underlying infrastructure, allowing developers to focus on writing code while AWS handles the deployment, capacity provisioning, load balancing, and automatic scaling."
    },
    {
        id: 54,
        text: "Which mechanism allows developers to access AWS services from application code?",
        options: [
        "AWS Software Development Kit",
        "AWS Management Console",
        "AWS CodePipeline",
        "AWS Config",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The AWS Software Development Kit (SDK) is the mechanism that allows developers to access AWS services from application code. The SDK provides libraries and APIs that developers can use to interact with AWS services programmatically. It supports multiple programming languages, making it easier for developers to integrate AWS services into their applications."
    },
    {
        id: 55,
        text: "A company is migrating to the AWS Cloud. The company wants to understand and identify potential security misconfigurations or unexpected behaviors. The company wants to prioritize any protective controls it might need. Which AWS Cloud Adoption Framework (AWS CAF) security perspective capability will meet these requirements?",
        options: [
        "Identity and access management",
        "Threat detection",
        "Platform engineering",
        "Availability and continuity management",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Threat detection – Understand and identify potential security misconfigurations, threats, or unexpected behaviors."
    },
    {
        id: 56,
        text: "A company wants to establish a private network connection between AWS and its corporate network. Which AWS service or feature will meet this requirement?",
        options: [
        "Amazon Connect",
        "Amazon Route 53",
        "AWS Direct Connect",
        "VPC peering",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Direct Connect is the service that allows a company to establish a private network connection between its corporate network and an Amazon Virtual Private Cloud (Amazon VPC). With Direct Connect, you can establish a dedicated network connection from your on-premises data center or corporate office to AWS, bypassing the public internet."
    },
    {
        id: 57,
        text: "Which AWS service converts text to lifelike voices?",
        options: [
        "Amazon Transcribe",
        "Amazon Rekognition",
        "Amazon Polly",
        "Amazon Textract",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Polly is the AWS service that converts text to lifelike voices. It is a text-to-speech (TTS) service that allows developers to integrate natural-sounding speech into their applications. Polly supports multiple languages and provides various voices with different accents and styles. It is often used in applications to enhance user experiences with voice interactions."
    },
    {
        id: 58,
        text: "A company wants to use application stacks to run a workload in the AWS Cloud. The company wants to use pre-configured instances. Which AWS service will meet these requirements?",
        options: [
        "Amazon Lightsail",
        "Amazon Athena",
        "AWS Outposts",
        "Amazon EC2",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon Lightsail is the AWS service that provides pre-configured instances and application stacks designed to simplify the process of deploying and managing applications in the cloud. It is a straightforward way for users to launch instances with pre-configured templates for common use cases, making it easy to get started without the need for extensive AWS expertise. Therefore, for the specific requirements of using pre-configured instances and application stacks, Amazon Lightsail (Option A) is the most suitable choice."
    },
    {
        id: 59,
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
        explanation: "VPC peering: VPC peering allows you to connect two VPCs within the same AWS region. It enables communication between instances in the peered VPCs as if they were in the same network. AWS Transit Gateway: AWS Transit Gateway is a service that simplifies the process of connecting multiple VPCs and on-premises networks. It acts as a hub that allows connectivity between multiple VPCs and can also extend connectivity to on-premises environments"
    },
    {
        id: 60,
        text: "Which AWS services are supported by Savings Plans? (Choose two.)",
        options: [
        "Amazon EC2",
        "Amazon RDS",
        "Amazon SageMaker",
        "Amazon Redshift",
        "Amazon DynamoDB",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "AWS offers three types of Savings Plans: Compute Savings Plans, EC2 Instance Savings Plans, and Amazon SageMaker Savings Plans."
    },
    {
        id: 61,
        text: "Which AWS service or tool can provide rightsizing recommendations for Amazon EC2 resources at no additional cost?",
        options: [
        "AWS Well-Architected Tool",
        "Amazon CloudWatch",
        "AWS Cost Explorer",
        "Amazon S3 analytics",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Cost Explorer: Visualize, understand, and manage your AWS costs and usage over time"
    },
    {
        id: 62,
        text: "A company operates a petabyte-scale data warehouse to analyze its data. The company wants a solution that will not require manual hardware and software management. Which AWS service will meet these requirements?",
        options: [
        "Amazon DocumentDB (with MongoDB compatibility)",
        "Amazon Redshift",
        "Amazon Neptune",
        "Amazon ElastiCache",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Redshift is a fast, fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to efficiently analyze all your data using your existing business intelligence tools"
    },
    {
        id: 63,
        text: "A library wants to automate the classification of electronic books based on the contents of the books. Which AWS service should the library use to meet this requirement?",
        options: [
        "Amazon Redshift",
        "Amazon CloudSearch",
        "Amazon Comprehend",
        "Amazon Aurora",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Comprehend is the AWS service that can be used for natural language processing tasks, including text classification. It can analyze and understand the content of electronic books to automatically classify them based on their contents."
    },
    {
        id: 64,
        text: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
        options: [
        "Encryption of application data",
        "Authentication of application users",
        "Protection of physical network infrastructure",
        "Configuration of firewalls",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS is responsible for the security of the cloud, which includes protecting the physical infrastructure, hardware, software, and facilities that run AWS services."
    },
    {
        id: 65,
        text: "Which options are AWS Cloud Adoption Framework (AWS CAF) cloud transformation journey recommendations? (Choose two.)",
        options: [
        "Envision phase",
        "Align phase",
        "Assess phase",
        "Mobilize phase",
        "Migrate and modernize phase",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 1],
        explanation: "Envision, Align, Lauch, Scale"
    },
    {
        id: 66,
        text: "A company wants to generate a list of IAM users. The company also wants to view the status of various credentials that are associated with the users, such as password, access keys, and multi-factor authentication (MFA) devices. Which AWS service or feature will meet these requirements?",
        options: [
        "IAM credential report",
        "AWS IAM Identity Center (AWS Single Sign-On)",
        "AWS Identity and Access Management Access Analyzer",
        "AWS Cost and Usage Report",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "No explanation provided in the document."
    },
    {
        id: 67,
        text: "A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments. Which pillar of the AWS Well-Architected Framework does this design support?",
        options: [
        "Security",
        "Performance efficiency",
        "Operational excellence",
        "Reliability",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Operational excellence in the AWS Well-Architected Framework focuses on designing and operating workloads to deliver business value, with a strong emphasis on continuous improvement, responding to events, and automation. Making regular updates in small, reversible increments supports the goal of achieving operational excellence by promoting agility and efficiency in the development and deployment processes."
    },
    {
        id: 68,
        text: "A company wants to track tags, buckets, and prefixes for its Amazon S3 objects. Which S3 feature will meet this requirement?",
        options: [
        "S3 Inventory report",
        "S3 Lifecycle",
        "S3 Versioning",
        "S3 ACLs",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "To keep track of objects and their respective tags, buckets, and prefixes, you can use an S3 Inventory report"
    },
    {
        id: 69,
        text: "A company wants to allow users to authenticate and authorize multiple AWS accounts by using a single set of credentials. Which AWS service or resource will meet this requirement?",
        options: [
        "AWS Organizations",
        "IAM user",
        "AWS IAM Identity Center (AWS Single Sign-On)",
        "AWS Control Tower",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Single Sign-On (SSO) enables centralized authentication and authorization across multiple AWS accounts and other business applications. It allows users to sign in once and access resources in various accounts without the need for separate credentials for each account. This helps simplify access management in a multi-account environment."
    },
    {
        id: 70,
        text: "A company created an Amazon EC2 instance. The company wants to control the incoming and outgoing network traffic at the instance level. Which AWS resource or service will meet this requirement?",
        options: [
        "AWS Shield",
        "Security groups",
        "Network Access Analyzer",
        "VPC endpoints",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Security groups act as virtual firewalls for your Amazon EC2 instances, controlling inbound and outbound traffic. You can configure security groups to allow or deny traffic based on rules that you define. By associating a security group with an EC2 instance, you can control the traffic to and from that instance at the network level."
    },
];

export const awsCCPQuestions6: Question[] = [
    {
        id: 1,
        text: "A company wants to use the AWS Cloud to deploy an application globally. Which architecture deployment model should the company use to meet this requirement?",
        options: [
        "Multi-Region",
        "Single-Region",
        "Multi-AZ",
        "Single-AZ",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Using a Multi-Region architecture allows you to distribute your application across different AWS regions, providing redundancy and minimizing the impact of potential regional failures. This helps in achieving global reach and ensures better availability and performance for users in different parts of the world."
    },
    {
        id: 2,
        text: "A company wants a web application to interact with various AWS services. Which AWS service or resource will meet this requirement?",
        options: [
        "AWS CloudShell",
        "AWS Marketplace",
        "AWS Management Console",
        "AWS CLI",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Management Console. The AWS Management Console provides a web-based user interface to access and manage AWS services, making it ideal for interacting with various AWS resources through a web application."
    },
    {
        id: 3,
        text: "A company is migrating its applications from on-premises to the AWS Cloud. The company wants to ensure that the applications are assigned only the minimum permissions that are needed to perform all operations. Which AWS service will meet these requirements?",
        options: [
        "AWS Identity and Access Management (IAM)",
        "Amazon CloudWatch",
        "Amazon Macie",
        "Amazon GuardDuty",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS IAM is the service specifically designed for managing access to AWS services and resources. It allows you to create and manage users, groups, and roles and define fine-grained permissions through policies. By carefully crafting IAM policies, you can grant only the necessary permissions to each application or user, following the principle of least privilege"
    },
    {
        id: 4,
        text: "Which options are AWS Cloud Adoption Framework (AWS CAF) governance perspective capabilities? (Choose two.)",
        options: [
        "Identity and access management",
        "Cloud financial management",
        "Application portfolio management",
        "Innovation management",
        "Product management",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 1],
        explanation: "Governance Perspectives: Program and Project Management Benefits Management Risk Management Cloud Financial Management Application Portfolio Management Data Governance Data Curation."
    },
    {
        id: 5,
        text: "Which AWS service provides a single location to track the progress of application migrations?",
        options: [
        "AWS Application Discovery Service",
        "AWS Application Migration Service",
        "AWS Service Catalog",
        "AWS Migration Hub",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Migration Hub (Migration Hub) provides a single place to discover your existing servers, plan migrations, and track the status of each application migration. The Migration Hub provides visibility into your application portfolio and streamlines planning and tracking. You can visualize the connections and the status of the servers and databases that make up each of the applications you are migrating, regardless of which migration tool you are using."
    },
    {
        id: 6,
        text: "Which actions can a system administrator take to connect to the EC2 instance? (Choose two.)",
        options: [
        "Use Amazon EC2 Instance Connect.",
        "Use a Remote Desktop Protocol (RDP) connection.",
        "Use AWS Batch.",
        "Use AWS Systems Manager Session Manager.",
        "Use Amazon Connect.",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: "Session Manager enables you to establish secure connections to your Amazon Elastic Compute Cloud (EC2) instances, edge devices, on-premises servers, and virtual machines (VMs). Amazon EC2 Instance Connect provides a simple and secure way to connect to your Linux instances with Secure Shell (SSH)."
    },
    {
        id: 7,
        text: "Which architecture concept describes the ability to deploy resources on demand and release resources when they are no longer needed?",
        options: [
        "High availability",
        "Decoupled architecture",
        "Resilience",
        "Elasticity",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Elasticity The ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you want to do this automatically."
    },
    {
        id: 8,
        text: "Which task requires a user to sign in as the AWS account root user?",
        options: [
        "The deletion of IAM users",
        "The deletion of an AWS account",
        "The creation of an organization in AWS Organizations",
        "The deletion of Amazon EC2 instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The AWS account root user has the highest level of access and is associated with the email address used to create the AWS account. Certain tasks, such as the deletion of an entire AWS account, can only be performed by the AWS account root user. Other administrative tasks, like creating an organization in AWS Organizations or deleting IAM users, can often be performed by IAM users with appropriate permissions, and it is recommended to use IAM users instead of relying on the root user for day-to-day activities."
    },
    {
        id: 9,
        text: "What does the Amazon S3 Intelligent-Tiering storage class offer?",
        options: [
        "Payment flexibility by reserving storage capacity",
        "Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume",
        "Automatic cost savings by moving objects between tiers based on access pattern changes",
        "Secure, durable, and lowest cost storage for data archival",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon S3 Intelligent-Tiering is the only cloud storage class that delivers automatic storage cost savings when data access patterns change, without performance impact or operational overhead."
    },
    {
        id: 10,
        text: "A company needs Amazon EC2 instances for a workload that can tolerate interruptions. Which EC2 instance purchasing option meets this requirement with the LARGEST discount compared to On-Demand prices?",
        options: [
        "Spot Instances",
        "Convertible Reserved Instances",
        "Standard Reserved Instances",
        "Dedicated Hosts",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Spot Instances provide the largest discount compared to On-Demand prices, but they come with the caveat that they can be terminated by AWS if the capacity is needed by On-Demand or Reserved Instances. Spot Instances are suitable for workloads that can tolerate interruptions and are cost-effective for applications that have flexible start and end times or that can be distributed across multiple instances."
    },
    {
        id: 11,
        text: "A company is planning to migrate to the AWS Cloud. The company wants to identify measurable business outcomes that will explain the value of the company's decision to migrate. Which phase of the cloud transformation journey includes these activities?",
        options: [
        "Envision",
        "Align",
        "Scale",
        "Launch",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Cloud Adoption Framework - CAF: Phases There're 4 phases: How it works 1. Envision : identify measurable business outcomes and prioritize transformation opportunities in line with your strategic objectives. 2. Align : Identify capability gaps and cross-organizational dependencies. 3. Launch : focus executing cloud migration, deliver pilots in production 4. Scale : optimizing and expanding cloud capabilities / expand pilots and business value"
    },
    {
        id: 12,
        text: "Which AWS service or component allows inbound traffic from the internet to access a VPC?",
        options: [
        "Internet gateway",
        "NAT gateway",
        "AWS WAF",
        "VPC peering",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. It supports IPv4 and IPv6 traffic. It does not cause availability risks or bandwidth constraints on your network traffic."
    },
    {
        id: 13,
        text: "Which AWS service can companies use to create infrastructure from code?",
        options: [
        "Amazon Elastic Kubernetes Service (Amazon EKS)",
        "AWS Outposts",
        "AWS CodePipeline",
        "AWS CloudFormation",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 14,
        text: "Which guideline is a well-architected design principle for building cloud applications?",
        options: [
        "Keep static data closer to compute resources.",
        "Provision resources for peak capacity.",
        "Design for automated recovery from failure.",
        "Use tightly coupled components.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "From a design principle standpoint, its more important to recover from failure than to plan ahead for peak capacity."
    },
    {
        id: 15,
        text: "A company needs to move 75 petabytes of data from its on-premises data centers to AWS. Which AWS service should the company use to meet these requirements MOST cost-effectively?",
        options: [
        "AWS Snowball Edge Storage Optimized",
        "AWS Snowmobile",
        "AWS Direct Connect",
        "AWS Storage Gateway",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 16,
        text: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
        options: [
        "Resource scalability",
        "Performance efficiency",
        "System elasticity",
        "Agile development",
        "Operational excellence",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 4],
        explanation: "AWS Well-Architected and the Six Pillars: Operational Excellence Pillar, Security Pillar Reliability Pillar, Performance Efficiency Pillar, Cost Optimization Pillar. Sustainability Pillar"
    },
    {
        id: 17,
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
        id: 18,
        text: "Which design principles should a company apply to AWS Cloud workloads to maximize sustainability and minimize environmental impact? (Choose two.)",
        options: [
        "Maximize utilization of Amazon EC2 instances.",
        "Minimize utilization of Amazon EC2 instances.",
        "Minimize usage of managed services.",
        "Force frequent application reinstallations by users.",
        "Reduce the need for users to reinstall applications.",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 4],
        explanation: ""
    },
    {
        id: 19,
        text: "In which ways does the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises data centers? (Choose two.)",
        options: [
        "AWS replaces upfront capital expenditures with pay-as-you-go costs.",
        "AWS is designed for high availability, which eliminates user downtime.",
        "AWS eliminates the need for on-premises IT staff.",
        "AWS uses economies of scale to continually reduce prices.",
        "AWS offers a single pricing model for Amazon EC2 instances.",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: ""
    },
    {
        id: 20,
        text: "A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements?",
        options: [
        "AWS Local Zones",
        "Availability Zones",
        "AWS Outposts",
        "AWS Wavelength Zones",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Outposts allows you to deploy AWS-designed infrastructure on-premises, providing a consistent hybrid experience. With AWS Outposts, you can run compute and storage workloads locally on your premises while seamlessly connecting to the rest of AWS's broad array of services in the cloud. In this scenario, if the company wants to keep the data local and on-premises to meet regulatory requirements and maintain low latency between AWS and on-premises resources, AWS Outposts would be the suitable option. It extends the AWS infrastructure to your on-premises location, providing a hybrid solution that combines the benefits of both on-premises and cloud resources."
    },
    {
        id: 21,
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
        id: 22,
        text: "When a user wants to utilize their existing per-socket, per-core, or per-virtual machine software licenses for a Microsoft Windows server running on AWS, which Amazon EC2 instance type is required?",
        options: [
        "Spot Instances",
        "Dedicated Instances",
        "Dedicated Hosts",
        "Reserved Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Dedicated Hosts allow you to use your existing per-socket, per-core, or per-VM software licenses"
    },
    {
        id: 23,
        text: "A solutions architect needs to maintain a fleet of Amazon EC2 instances so that any impaired instances are replaced with new ones. Which AWS service should the solutions architect use?",
        options: [
        "Amazon Elastic Container Service (Amazon ECS)",
        "Amazon GuardDuty",
        "AWS Shield",
        "AWS Auto Scaling",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Auto Scaling helps ensure the desired number of EC2 instances are available to handle the load for your application. It can automatically adjust the number of instances in the group, including replacing impaired instances, based on configured policies."
    },
    {
        id: 24,
        text: "Which AWS service provides on-premises applications with low-latency access to data that is stored in the AWS Cloud?",
        options: [
        "Amazon CloudFront",
        "AWS Storage Gateway",
        "AWS Backup",
        "AWS DataSync",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Storage Gateway is a hybrid cloud storage service that enables on-premises applications to access low-latency, highly durable storage in the AWS Cloud. It provides a seamless and secure integration between an organization's on-premises environment and AWS Cloud storage resources."
    },
    {
        id: 25,
        text: "What does Amazon CloudFront provide?",
        options: [
        "Automatic scaling for all resources to power an application from a single unified interface",
        "Secure delivery of data, videos, applications, and APIs to users globally with low latency",
        "Ability to directly manage traffic globally through a variety of routing types, including latency-based routing, geo DNS, geoproximity, and weighted round robin",
        "Automatic distribution of incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and AWS Lambda functions",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon CloudFront is a content delivery network (CDN) service that helps you distribute your static and dynamic content quickly and reliably with high speed"
    },
    {
        id: 26,
        text: "Which AWS service supports the deployment and management of applications in the AWS Cloud?",
        options: [
        "Amazon CodeGuru",
        "AWS Fargate",
        "AWS CodeCommit",
        "AWS Elastic Beanstalk",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Elastic Beanstalk helps you deploy and manage web applications with capacity provisioning, app health monitoring, and more."
    },
    {
        id: 27,
        text: "A company wants to integrate natural language processing (NLP) into business intelligence (BI) dashboards. The company wants to ask questions and receive answers with relevant visualizations. Which AWS service or tool will meet these requirements?",
        options: [
        "Amazon Macie",
        "Amazon Rekognition",
        "Amazon QuickSight Q",
        "Amazon Lex",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon QuickSight Q is the AWS service or tool that allows users to integrate natural language processing (NLP) into business intelligence (BI) dashboards. With QuickSight Q, users can ask questions using natural language and receive answers with relevant visualizations. It enables an interactive and conversational experience for querying and exploring data within BI dashboards."
    },
    {
        id: 28,
        text: "Which Amazon S3 feature or storage class uses the AWS backbone network and edge locations to reduce latencies from the end user to Amazon S3?",
        options: [
        "S3 Cross-Region Replication",
        "S3 Transfer Acceleration",
        "S3 Event Notifications",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "S3 Transfer Acceleration is a feature of Amazon S3 that uses Amazon CloudFront's globally distributed edge locations to accelerate transfers of files to and from Amazon S3 buckets. It leverages the AWS backbone network and edge locations to reduce latencies and increase transfer speeds for both uploading and downloading content from Amazon S3. This feature is particularly useful when users or applications are located far from the AWS region where the S3 bucket is hosted, as it optimizes the data path and helps achieve faster data transfers by using the CloudFront network."
    },
    {
        id: 29,
        text: "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
        options: [
        "Amazon Aurora",
        "Amazon DynamoDB",
        "Amazon RDS",
        "Amazon Redshift",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon DynamoDB Serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale"
    },
    {
        id: 30,
        text: "Which AWS service is a relational database compatible with MySQL and PostgreSQL?",
        options: [
        "Amazon Redshift",
        "Amazon DynamoDB",
        "Amazon Aurora",
        "Amazon Neptune",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Aurora is a global-scale relational database service built for the cloud with full MySQL and PostgreSQL compatibility."
    },
    {
        id: 31,
        text: "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?",
        options: [
        "Use a monolithic design",
        "Design for automation",
        "Design for single points of failure",
        "Loosely couple components.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Loosely coupling components is a design principle that emphasizes minimizing dependencies between different components in a system. This helps isolate failures, meaning that if one component fails or undergoes changes, it doesn't have a significant impact on other components. This design principle contributes to increased resilience, flexibility, and easier maintenance of the overall system."
    },
    {
        id: 32,
        text: "Which benefit of cloud computing gives a company the ability to deploy applications to users all over the world through a network of AWS Regions, Availability Zones, and edge locations?",
        options: [
        "Economy of scale",
        "Global reach",
        "Agility",
        "High availability",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The benefit of cloud computing that provides the ability to deploy applications to users all over the world through a network of AWS Regions, Availability Zones, and edge locations is referred to as \"Global reach.\" AWS has a global infrastructure with multiple Regions, each consisting of multiple Availability Zones, and edge locations for content delivery. This global reach allows companies to distribute their applications and content closer to end-users, reducing latency and improving the overall user experience."
    },
    {
        id: 33,
        text: "Which AWS service makes it easier to monitor and troubleshoot application logs and cloud resources?",
        options: [
        "Amazon EC2",
        "AWS Identity and Access Management (IAM)",
        "Amazon CloudWatch",
        "AWS CloudTrail",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon CloudWatch is the AWS service that makes it easier to monitor and troubleshoot application logs and cloud resources. CloudWatch allows you to collect and track metrics, collect and monitor log files, set alarms, and automatically react to changes in your AWS resources. It provides a unified view of your AWS resources, applications, and services that run on AWS. With CloudWatch, you can gain system-wide visibility into resource utilization, application performance, and operational health."
    },
    {
        id: 34,
        text: "Which AWS service will help a company plan a migration to AWS by collecting the configuration, usage, and behavior data of on-premises data centers?",
        options: [
        "AWS Resource Groups",
        "AWS Application Discovery Service",
        "AWS Service Catalog",
        "AWS Systems Manager",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Application Discovery Service helps you plan your migration to the AWS cloud by collecting usage and configuration data about your on-premises servers and databases."
    },
    {
        id: 35,
        text: "Which AWS service uses AWS Compute Optimizer to provide sizing recommendations based on workload metrics?",
        options: [
        "Amazon EC2",
        "Amazon RDS",
        "Amazon Lightsail",
        "AWS Step Functions",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Compute Optimizer helps avoid overprovisioning and underprovisioning four types of AWS resources—Amazon Elastic Compute Cloud (EC2) instance types, Amazon Elastic Block Store (EBS) volumes, Amazon Elastic Container Service (ECS) services on AWS Fargate, and AWS Lambda functions—based on your utilization data."
    },
    {
        id: 36,
        text: "Which AWS service uses a combination of publishers and subscribers?",
        options: [
        "AWS Lambda",
        "Amazon Simple Notification Service (Amazon SNS)",
        "Amazon CloudWatch",
        "AWS CloudFormation",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Simple Notification Service (SNS) makes it easy for you to build an application using the pub/sub messaging model. You can send messages from your applications to customers or other applications in a scalable and cost-efficient manner."
    },
    {
        id: 37,
        text: "A company is in the early stages of planning a migration to AWS. The company wants to obtain the monthly predicted total AWS cost of ownership for future Amazon EC2 instances and associated storage. Which AWS service or tool should the company use to meet these requirements?",
        options: [
        "AWS Pricing Calculator",
        "AWS Compute Optimizer",
        "AWS Trusted Advisor",
        "AWS Application Migration Service",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The AWS service or tool that a company should use to obtain the monthly predicted total AWS cost of ownership for future Amazon EC2 instances and associated storage is the AWS Pricing Calculator. The AWS Pricing Calculator allows users to estimate the cost of using AWS services based on their usage patterns, configurations, and requirements. It provides a detailed breakdown of costs, including costs for EC2 instances and associated storage"
    },
    {
        id: 38,
        text: "Which AWS service or tool will monitor AWS resources and applications in real time?",
        options: [
        "AWS Trusted Advisor",
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Cost Explorer",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 39,
        text: "Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the business perspective?",
        options: [
        "Program and project management",
        "Data science",
        "Observability",
        "Change and release management",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Data science – Leverage experimentation, advanced analytics, and machine learning to solve complex business problems. Predictive and prescriptive analytics can help you complete your data monetization strategy by enabling you to improve operational effectiveness and decision-making as well as customer and employee experience."
    },
    {
        id: 40,
        text: "Which AWS resource can help a company reduce its costs in exchange for a usage commitment when using Amazon EC2 instances?",
        options: [
        "Compute Savings Plans",
        "Auto Scaling group",
        "On-Demand Instance",
        "EC2 instance store",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Compute Savings Plans allow a company to reduce its costs in exchange for a usage commitment over a one- or three-year term. This plan provides the most flexibility and significant savings on Amazon EC2 instances, regardless of instance family, size, operating system, or region."
    },
    {
        id: 41,
        text: "Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes a capability for well-designed data and analytics architecture?",
        options: [
        "Security",
        "Governance",
        "Operations",
        "Platform",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 42,
        text: "Which options are AWS Cloud Adoption Framework (AWS CAF) people perspective capabilities? (Choose two.)",
        options: [
        "Organizational alignment",
        "Portfolio management",
        "Organization design",
        "Risk management",
        "Modern application development",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: ""
    },
    {
        id: 43,
        text: "A company needs a bridge between technology and business to help evolve to a culture of continuous growth and learning. Which perspective in the AWS Cloud Adoption Framework (AWS CAF) serves as this bridge?",
        options: [
        "People",
        "Governance",
        "Operations",
        "Security",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 44,
        text: "Which option is a responsibility of AWS under the AWS shared responsibility model?",
        options: [
        "Application data security",
        "Patch management for applications that run on Amazon EC2 instances",
        "Patch management of the underlying infrastructure for managed services",
        "Application identity and access management",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 45,
        text: "Which AWS service or resource can identify and provide reports on IAM resources in one AWS account that is shared with another AWS account?",
        options: [
        "IAM credential report",
        "AWS IAM Identity Center (AWS Single Sign-On)",
        "AWS Identity and Access Management Access Analyzer",
        "Amazon Cognito user pool",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Identity and Access Management Access Analyzer - It helps identify and analyze resource access policies including those shared with other AWS accounts. IAM Credential report gives information about user credentials in an AWS account but it does not do cross account sharing."
    },
    {
        id: 46,
        text: "Which AWS Well-Architected Framework pillar focuses on structured and streamlined allocation of computing resources?",
        options: [
        "Reliability",
        "Operational excellence",
        "Performance efficiency",
        "Sustainability",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "The Performance Efficiency pillar of the AWS Well-Architected Framework focuses on the efficient use of computing resources to meet requirements and the maintenance of that efficiency as demand changes and technologies evolve."
    },
    {
        id: 47,
        text: "Which AWS Cloud Adoption Framework (AWS CAF) capabilities belong to the governance perspective? (Choose two.)",
        options: [
        "Program and project management",
        "Product management",
        "Portfolio management",
        "Risk management",
        "Event management",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: "These two capabilities fall under the Governance perspective of the AWS Cloud Adoption Framework (AWS CAF), which focuses on ensuring business governance and controls, including managing risks and ensuring compliance."
    },
    {
        id: 48,
        text: "A company wants to use AWS Managed Services (AMS) for operational support and wants to understand the scope of AMS. Which AMS feature will meet these requirements?",
        options: [
        "Landing zone and network management",
        "Customer application development",
        "DevSecOps pipeline configuration",
        "Application log monitoring",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Managed Services (AMS) offers landing zone and network management as part of its scope to assist companies in setting up and managing their AWS environment. This includes establishing a secure and well-architected foundation for workloads, setting up network connectivity, managing accounts and users, implementing security controls, and ensuring compliance with best practices and regulatory requirements."
    },
    {
        id: 49,
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
        id: 50,
        text: "A company is in the process of finding correct Amazon EC2 instance types and sizes to meet its performance and capacity requirements. The company wants to find the lowest possible cost. Which option accurately characterizes the company's actions?",
        options: [
        "Auto Scaling",
        "Storage tiering",
        "Rightsizing",
        "Instance scheduling",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Rightsizing involves finding the most suitable instance types and sizes to match performance and capacity requirements while optimizing costs. This process ensures that resources are neither underutilized nor over-provisioned, helping to minimize expenses while meeting workload demands."
    },
    {
        id: 51,
        text: "A company wants to manage sign-in security for workforce users. The company needs to create workforce users and centrally manage their access across all the company's AWS accounts and applications. Which AWS service will meet these requirements?",
        options: [
        "AWS Audit Manager",
        "Amazon Cognito",
        "AWS Security Hub",
        "AWS IAM Identity Center (AWS Single Sign-On)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS IAM Identity Center, also known as AWS Single Sign-On (SSO), is a service that simplifies the management of access to AWS accounts and business applications by providing centralized identity and access management. With AWS SSO, companies can create and manage workforce users, control their access to AWS accounts and applications using single sign-on, and enforce multi-factor authentication for enhanced security. This service helps streamline access management and ensures consistent security practices across the organization's AWS environment."
    },
    {
        id: 52,
        text: "A company wants a report that lists the status of multi-factor authentication (MFA) devices that all users in the company's AWS account use. Which AWS feature or service will meet this requirement?",
        options: [
        "AWS Cost and Usage Reports",
        "IAM credential reports",
        "Detailed Billing Reports",
        "AWS Cost Explorer reports",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 53,
        text: "A company wants to use machine learning capabilities to analyze log data from its Amazon EC2 instances and efficiently conduct security investigations. Which AWS service will meet these requirements?",
        options: [
        "Amazon Inspector",
        "Amazon QuickSight",
        "Amazon Detective",
        "Amazon GuardDuty",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Detective is a fully managed service that helps you to investigate potential security issues or suspicious activities across your AWS environment, including EC2 instances. It automatically collects log data from multiple AWS sources, such as VPC Flow Logs, CloudTrail, and GuardDuty findings, and uses machine learning, statistical analysis, and graph theory to build interactive visualizations and make it easier to identify security issues and conduct investigations."
    },
    {
        id: 54,
        text: "A company is launching a mobile app in the AWS Cloud. The company wants the app's users to sign in through social media identity providers (IdPs). Which AWS service will meet this requirement?",
        options: [
        "AWS Lambda",
        "Amazon Cognito",
        "AWS Secrets Manager",
        "Amazon CloudFront",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Cognito is a fully managed identity service that allows you to easily add user sign-up and sign-in to your mobile and web applications. It supports social identity providers (IdPs) such as Facebook, Google, Amazon, and others, allowing users to sign in using their existing social media accounts."
    },
    {
        id: 55,
        text: "Which complimentary AWS service or tool creates data-driven business cases for cloud planning?",
        options: [
        "Migration Evaluator",
        "AWS Billing Conductor",
        "AWS Billing Console",
        "Amazon Forecast",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The complimentary AWS service that helps create data-driven business cases for cloud planning is AWS Migration Evaluator, formerly known as TSO Logic. AWS Migration Evaluator assists organizations in understanding the cost-benefits of moving to AWS by analyzing their current on-premises IT infrastructure usage and costs. It provides detailed reports and insights, enabling decision-makers to build compelling, data-driven business cases for cloud migration and planning. This tool helps in identifying the most cost-effective AWS services to meet an organization's specific needs, estimating the potential cost savings, and planning the migration strategy effectively."
    },
    {
        id: 56,
        text: "Which cloud concept is demonstrated by using AWS Cost Explorer?",
        options: [
        "Rightsizing",
        "Reliability",
        "Resilience",
        "Modernization",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Cost Explorer is a tool that enables you to visualize, understand, and manage your AWS costs and usage over time. This aligns with the concept of rightsizing, which involves optimizing the allocation of cloud resources based on usage and cost. By using AWS Cost Explorer, you can identify underutilized resources and make informed decisions about adjusting resource allocation to reduce costs, which is a key aspect of rightsizing."
    },
    {
        id: 57,
        text: "A company wants to deploy a non-containerized Java-based web application on AWS. The company wants to use a managed service to quickly deploy the application. The company wants the service to automatically provision capacity, load balance, scale, and monitor application health. Which AWS service will meet these requirements?",
        options: [
        "Amazon Elastic Container Service (Amazon ECS)",
        "AWS Lambda",
        "Amazon Elastic Kubernetes Service (Amazon EKS)",
        "AWS Elastic Beanstalk",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS. You simply upload your code, and AWS Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, and auto-scaling to application health monitoring. It is ideal for non-containerized Java-based web applications, as it abstracts the underlying infrastructure, allowing developers to focus on writing code rather than managing environments"
    },
    {
        id: 58,
        text: "Which AWS service or tool gives users the ability to connect with AWS and deploy resources programmatically?",
        options: [
        "Amazon QuickSight",
        "AWS PrivateLink",
        "AWS Direct Connect",
        "AWS SDKs",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS SDKs provide a set of tools for developers to integrate with and manage AWS services programmatically. These SDKs support multiple programming languages, including Java, Python, .NET, Node.js, PHP, Ruby, and Go, among others, enabling developers to use the language they are most comfortable with to interact with AWS services. Through these SDKs, developers can create, configure, and manage AWS resources directly from their applications."
    },
    {
        id: 59,
        text: "A company has deployed a web application to Amazon EC2 instances. The EC2 instances have low usage. Which AWS service or feature should the company use to rightsize the EC2 instances?",
        options: [
        "AWS Config",
        "AWS Cost Anomaly Detection",
        "AWS Budgets",
        "AWS Compute Optimizer",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 60,
        text: "A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources. Which AWS service will meet this requirement?",
        options: [
        "AWS Batch",
        "AWS Elastic Disaster Recovery",
        "AWS Backup",
        "Amazon FSx",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Backup is a fully managed backup service that makes it easy to centralize and automate the back up of data across AWS services in the cloud as well as on-premises. With AWS Backup, you can configure backup policies and monitor backup activity for AWS resources in one place. This includes compute resources like EC2 instances, storage resources like EBS volumes, and database resources like RDS databases."
    },
    {
        id: 61,
        text: "A company needs to categorize and track AWS usage cost based on business categories. Which AWS service or feature should the company use to meet these requirements?",
        options: [
        "Cost allocation tags",
        "AWS Organizations",
        "AWS Security Hub",
        "AWS Cost and Usage Report",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Cost allocation tags enable you to categorize and track your AWS costs. When you apply tags to your AWS resources (such as EC2 instances or S3 buckets), AWS generates a Cost and Usage Report that includes usage and costs aggregated by tags. This allows you to allocate costs across your organization's business categories, making it easier to track and manage your AWS spending by project, department, application, or any other business-relevant dimension"
    },
    {
        id: 62,
        text: "Which AWS service can migrate data between AWS storage services?",
        options: [
        "AWS DataSync",
        "AWS Direct Connect",
        "AWS Lake Formation",
        "Amazon S3",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS DataSync works in 3 cases: 1. Transfer data between on premises and AWS; 2. Transfer data between AWS storage services; 3. Transfer data between AWS and other locations."
    },
    {
        id: 63,
        text: "Which statements represent the cost-effectiveness of the AWS Cloud? (Choose two.)",
        options: [
        "Users can trade fixed expenses for variable expenses.",
        "Users can deploy all over the world in minutes.",
        "AWS offers increased speed and agility.",
        "AWS is responsible for patching the infrastructure.",
        "Users benefit from economies of scale.",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 4],
        explanation: ""
    },
    {
        id: 64,
        text: "A company wants to design its cloud architecture so that it can support development innovations, and continuously improve processes and procedures. This is an example of which pillar of the AWS Well-Architected Framework?",
        options: [
        "Security",
        "Performance efficiency",
        "Operational excellence",
        "Reliability",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 65,
        text: "A company needs to consolidate the billing for multiple AWS accounts. The company needs to use one account to pay on behalf of all the other accounts. Which AWS service or tool should the company use to meet this requirement?",
        options: [
        "AWS Trusted Advisor",
        "AWS Organizations",
        "AWS Budgets",
        "AWS Service Catalog",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 66,
        text: "A company is moving some of its on-premises IT services to the AWS Cloud. The finance department wants to see the entire bill so it can forecast spending limits. Which AWS service can the company use to set spending limits and receive notifications if those limits are exceeded?",
        options: [
        "AWS Cost and Usage Reports",
        "AWS Budgets",
        "AWS Organizations consolidated billing",
        "Cost Explorer",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Budgets is a service that allows users to set customized budgets that track and monitor their AWS spending. Users can set up alerts to be notified via email or SNS when their budget thresholds are approaching or exceeded. This service would allow the finance department to forecast spending limits and receive notifications if those limits are exceeded as requested."
    },
    {
        id: 67,
        text: "Which AWS Support plans provide access to an AWS technical account manager (TAM)? (Choose two.)",
        options: [
        "AWS Basic Support",
        "AWS Developer Support",
        "AWS Business Support",
        "AWS Enterprise On-Ramp Support",
        "AWS Enterprise Support",
    ],
        correctAnswer: 3,
        correctAnswers: [3, 4],
        explanation: ""
    },
    {
        id: 68,
        text: "Where can users find examples of AWS Cloud solution designs?",
        options: [
        "AWS Marketplace",
        "AWS Service Catalog",
        "AWS Architecture Center",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Users can find examples of AWS Cloud solution designs in the AWS Architecture Center, which provides a collection of technical resources and best practices for building AWS-based applications."
    },
    {
        id: 69,
        text: "Which task is the responsibility of a company that is using Amazon RDS?",
        options: [
        "Provision the underlying infrastructure.",
        "Create IAM policies to control administrative access to the service.",
        "Install the cables to connect the hardware for compute and storage.",
        "Install and patch the RDS operating system.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The RDS does It automates time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups, allowing you to focus on your applications."
    },
    {
        id: 70,
        text: "Which of the following is an advantage that the AWS Cloud provides to users?",
        options: [
        "Users eliminate the need to guess about infrastructure capacity requirements.",
        "Users decrease their variable costs by maintaining sole ownership of IT hardware.",
        "Users maintain control of underlying IT infrastructure hardware.",
        "Users maintain control of operating systems for managed services.",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
];

export const awsCCPQuestions7: Question[] = [
    {
        id: 1,
        text: "Which feature of Amazon RDS provides the ability to automatically create a primary database instance and synchronously replicate data to an instance in another Availability Zone?",
        options: [
        "Read replicas",
        "Blue/green deployment",
        "Multi-AZ deployment",
        "Reserved Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 2,
        text: "A company needs to check for IAM access keys that have not been rotated recently. Which AWS service should the company use to meet this requirement?",
        options: [
        "AWS WAF",
        "AWS Shield",
        "Amazon Cognito",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS WAF is used to block SQL injection attacks AWS Shield is used to protect against DDoS attacks Amazon Cognito is used to implement customer identity in your AWS application"
    },
    {
        id: 3,
        text: "A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances. Which AWS service or feature will meet this requirement?",
        options: [
        "Network ACLs",
        "AWS WAF",
        "Amazon GuardDuty",
        "Security groups",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Security groups. Security groups act as a virtual firewall that controls inbound and outbound traffic for EC2 instances within a subnet. You can configure rules in security groups to allow only the minimum required network traffic, such as allowing traffic from specific IP address ranges or specific protocols like HTTPS. If you need to control network traffic between certain EC2 instances, security groups are the appropriate choice."
    },
    {
        id: 4,
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
        explanation: "(None provided)"
    },
    {
        id: 5,
        text: "A company is building a new application on AWS. The company needs the application to remain available if an individual application component fails. Which design principle should the company use to meet this requirement?",
        options: [
        "Disposability",
        "Automation",
        "Loose coupling",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Loose coupling reduces the risk that a change made in one component, such as a database or user interface, creates unanticipated changes in other parts."
    },
    {
        id: 6,
        text: "Which AWS service or feature can a user configure to limit network access at the subnet level?",
        options: [
        "AWS Shield",
        "AWS WAF",
        "Network ACL",
        "Security group",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 7,
        text: "A company wants to use a managed service to identify and protect sensitive data that is stored in Amazon S3. Which AWS service will meet these requirements?",
        options: [
        "AWS IAM Access Analyzer",
        "Amazon GuardDuty",
        "Amazon Inspector",
        "Amazon Macie",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 8,
        text: "Which AWS service can a company use to manage encryption keys in the cloud?",
        options: [
        "AWS License Manager",
        "AWS Certificate Manager (ACM)",
        "AWS CloudHSM",
        "AWS Directory Service",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. With CloudHSM, you can manage your own encryption, keys using FIPS 140-2 Level 3 validated HSM. It also allows validated HSMs generate, store, and manage cryptographic keys used for data encryption in a way that keys are accessible only by you."
    },
    {
        id: 9,
        text: "A company wants to enhance security by launching a third-party ISP intrusion detection system from its AWS account. Which AWS service or resource should the company use to meet this requirement?",
        options: [
        "AWS Security Hub",
        "AWS Marketplace",
        "AWS Quick Starts",
        "AWS Security Center",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 10,
        text: "How does the AWS Cloud help companies build agility into their processes and cloud infrastructure?",
        options: [
        "Companies can avoid provisioning too much capacity when they do not know how much capacity is required.",
        "Companies can expand into new geographic regions.",
        "Companies can access a range of technologies to experiment and innovate quickly",
        "Companies can pay for IT resources only when they use the resources.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Access to a broad set of tools and services, companies can swiftly try new ideas, develop and test applications, and adopt new technologies without the need for significant upfront investment or the constraints of physical infrastructure. Agility enables faster iteration and innovation, allowing businesses to stay competitive and respond more rapidly to market changes."
    },
    {
        id: 11,
        text: "Which AWS service or tool gives a company the ability to release application changes in an automated way?",
        options: [
        "Amazon AppFlow",
        "AWS CodeDeploy",
        "AWS PrivateLink",
        "Amazon EKS Distro",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances, serverless Lambda functions, or Amazon ECS services instances, on-premises instances, serverless Lambda functions, or Amazon ECS services"
    },
    {
        id: 12,
        text: "Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on managing identities and permissions at scale?",
        options: [
        "Operations",
        "Platform",
        "Governance",
        "Security",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 13,
        text: "Which AWS service or feature allows users to securely store encrypted credentials and retrieve these credentials when required?",
        options: [
        "AWS Encryption SDK",
        "AWS Security Hub",
        "AWS Secrets Manager",
        "AWS Artifact",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "AWS Secrets Manager. It allows users to securely store and centrally manage secrets such as database credentials, API keys, and other sensitive information."
    },
    {
        id: 14,
        text: "Which pillar of the AWS Well-Architected Framework aligns with the ability to make frequent, small, and reversible changes to AWS cloud architecture?",
        options: [
        "Security",
        "Cost optimization",
        "Operational excellence",
        "Performance efficiency",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 15,
        text: "Which AWS service or resource can a company use to deploy AWS WAF rules?",
        options: [
        "Amazon EC2",
        "Application Load Balancer",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS WAF can be deployed on Amazon CloudFront, the Application Load Balancer (ALB), Amazon API Gateway, and AWS AppSync."
    },
    {
        id: 16,
        text: "A company hosts its website on Amazon EC2 instances. The company needs to ensure that the website reaches a global audience and provides minimum latency to users. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon Route 53",
        "Amazon CloudFront",
        "Elastic Load Balancing",
        "AWS Lambda",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon CloudFront: It's a content delivery network (CDN) service that distributes content globally through a network of HTML, images, videos, and APIs from the nearest edge location to the user, reducing latency significantly. By using CloudFront, the company can serve web content efficiently to users worldwide, improving their experience."
    },
    {
        id: 17,
        text: "Which AWS design principle emphasizes the reduction of interdependencies between components of an application?",
        options: [
        "Scalability",
        "Loose coupling",
        "Automation",
        "Caching",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 18,
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
        explanation: "(None provided)"
    },
    {
        id: 19,
        text: "A company is running a reporting web server application on Amazon EC2 instances. The application runs once every week and once again at the end of the month. The EC2 instances can be shut down when they are not in use. What is the MOST cost-effective billing model for this use case?",
        options: [
        "Standard Reserved Instances",
        "Convertible Reserved Instances",
        "On-Demand Capacity Reservations",
        "On-Demand Instances",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 20,
        text: "A company wants to discover, prepare, move, and integrate data from multiple sources for data analytics and machine learning. Which AWS serverless data integration service should the company use to meet these requirements?",
        options: [
        "AWS Glue",
        "AWS Data Exchange",
        "Amazon Athena",
        "Amazon EMR",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "(None provided)"
    },
    {
        id: 21,
        text: "A company is moving its development and test environments to AWS to increase agility and reduce cost. Because these are not production workloads and the servers are not fully utilized, occasional unavailability is acceptable. What is the MOST cost-effective Amazon EC2 pricing model that will meet these requirements?",
        options: [
        "Reserved Instances",
        "On-Demand Instances",
        "Spot Instances",
        "Dedicated Hosts",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 22,
        text: "A company deploys its application on Amazon EC2 instances. The application occasionally experiences sudden increases in demand. The company wants to ensure that its application can respond to changes in demand at the lowest possible cost. Which AWS service or concept will meet these requirements?",
        options: [
        "AWS Auto Scaling",
        "AWS Compute Optimizer",
        "AWS Cost Explorer",
        "AWS Well-Architected Framework",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "(None provided)"
    },
    {
        id: 23,
        text: "A company wants to organize its users so that the company can grant permissions to the users as a group. Which AWS service or tool can the company use to meet this requirement?",
        options: [
        "Security groups",
        "AWS Identity and Access Management (IAM)",
        "Resource groups",
        "AWS Security Hub",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 24,
        text: "A company wants to build an application that uses AWS Lambda to run Python code. Under the AWS shared responsibility model, which tasks will be the company’s responsibility? (Choose two.)",
        options: [
        "Management of the underlying infrastructure",
        "Management of the operating system",
        "Writing the business logic code",
        "Installation of the computer language runtime",
        "Providing AWS Identity and Access Management (IAM) access to the Lambda service.",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 4],
        explanation: "(None provided)"
    },
    {
        id: 25,
        text: "A company needs to identify who accessed an AWS service and what action was performed for a given time period. Which AWS service should the company use to meet this requirement?",
        options: [
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Security Hub",
        "Amazon Inspector",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "CloudTrail enables auditing, security monitoring, and operational troubleshooting by tracking user activity and API usage."
    },
    {
        id: 26,
        text: "A company wants to use a centralized AWS service to enforce compliance with the organizational business standards. The company wants to use an AWS service that can govern and control who can deploy, manage, and decommission AWS resources. Which AWS service will meet these requirements?",
        options: [
        "Amazon CloudWatch",
        "AWS Service Catalog",
        "Amazon GuardDuty",
        "AWS Security Hub",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS. It helps enforce compliance by controlling which services and configurations are available for deployment. Administrators can define and manage these catalogs, ensuring that only for deployment. Administrators can be and manage these catalogs, helping in governing and controlling the lifecycle of resources, from deployment to decommissioning."
    },
    {
        id: 27,
        text: "What does \"security of the cloud\" refer to in the AWS shared responsibility model?",
        options: [
        "Availability of AWS services such as Amazon EC2",
        "Security of the AWS infrastructure that runs all the AWS services",
        "Implementation of password policies for IAM users",
        "Security of customer environments using AWS Network Firewall partners",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 28,
        text: "A company has an application that produces unstructured data continuously. The company needs to store the data so that the data is durable and easy to query. Which AWS service can the company use to meet these requirements?",
        options: [
        "Amazon RDS",
        "Amazon Aurora",
        "Amazon QuickSight",
        "Amazon DynamoDB",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon DynamoDB is not specifically designed for unstructured data, but it can handle semi-structured and structured data effectively."
    },
    {
        id: 29,
        text: "Which options are AWS Cloud Adoption Framework (AWS CAF) perspectives? (Choose two.)",
        options: [
        "Cloud fluency",
        "Security",
        "Change acceleration",
        "Architecture",
        "Business",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 1, 4],
        explanation: "(None provided)"
    },
    {
        id: 30,
        text: "A company wants to migrate a company’s on-premises container infrastructure to the AWS Cloud. The company wants to prevent unplanned administration and operation cost and adapt to a serverless architecture. Which AWS service will meet these requirements?",
        options: [
        "Amazon Connect",
        "AWS Fargate",
        "Amazon Lightsail",
        "Amazon EC2",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 31,
        text: "A company wants its Amazon EC2 instances to be in different locations but share the same geographic area. The company also wants to use multiple power grids and independent networking connectivity for the EC2 instances. Which solution meets these requirements?",
        options: [
        "Use EC2 instances in multiple edge locations in the same AWS Region.",
        "Use EC2 instances in multiple Availability Zones in the same AWS Region.",
        "Use EC2 instances in multiple Amazon Connect locations in the same AWS Region.",
        "Use EC2 instances in multiple AWS Artifact locations in the same AWS Region.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 32,
        text: "An e-commerce company has deployed a new web application on Amazon EC2 instances. The company wants to distribute incoming HTTP traffic evenly across all running instances. Which AWS service or resource will meet this requirement?",
        options: [
        "Amazon EC2 Auto Scaling",
        "Application Load Balancer",
        "Gateway Load Balancer",
        "Network Load Balancer",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Load balancers: Application load balancer (ALB), network load balancer (NLB), and gateway load balancer (GLB) are three types of load balancers used in the cloud. Load balancing is the process of distributing network traffic equally across a pool of resources supporting an application. Modern applications process millions of users simultaneously. These high-traffic volumes require many resource servers with duplicate data. To redirect application traffic, ALBs examine the requested content, such as HTTP headers or SSL session IDs. NLBs examine IP addresses and other network information to redirect traffic optimally. GLBs act as a transparent network gateway (a single entry and exit point for all traffic) and distribute traffic with the demand."
    },
    {
        id: 33,
        text: "Which AWS service or feature gives users the ability to connect VPCs and on-premises networks to a central hub?",
        options: [
        "Virtual private gateway",
        "AWS Transit Gateway",
        "Internet gateway",
        "Customer gateway",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Transit Gateway connects your Amazon Virtual Private Clouds (VPCs) and on-premises networks through a central hub. This connection simplifies your network and puts an end to complex peering relationships."
    },
    {
        id: 34,
        text: "A company wants to run CPU-intensive workloads across multiple Amazon EC2 instances. Which EC2 instance type should the company use to meet this requirement?",
        options: [
        "General Purpose",
        "Compute optimized",
        "Memory optimized",
        "Storage optimized",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 35,
        text: "A company is connecting multiple VPCs and on-premises networks. The company needs to use an AWS service as a cloud router to simplify peering relationships. Which AWS service can the company use to meet this requirement?",
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
        id: 36,
        text: "A company stores a large amount of data that auditors access only twice each year. Which Amazon S3 storage class should the company use to store the data with the LOWEST cost?",
        options: [
        "Amazon S3 Outposts",
        "Amazon S3 Glacier Instant Retrieval",
        "Amazon S3 Standard",
        "Amazon S3 Intelligent-Tiering",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 37,
        text: "Which action should a company take to improve security in its account?",
        options: [
        "Remove the root user account.",
        "Require multi-factor authentication (MFA) for privileged users.",
        "Create an access key for the AWS account root user.",
        "Create an access key for each privileged user.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 38,
        text: "Which of the following are ways to improve security on AWS? (Choose two.)",
        options: [
        "Granting AWS Artifact permissions to all IAM roles",
        "Granting the broadest permissions to all IAM roles",
        "Running application code with AWS Cloud",
        "Enabling multi-factor authentication (MFA) with Amazon Cognito",
        "Using AWS Trusted Advisor security checks",
    ],
        correctAnswer: 3,
        correctAnswers: [3, 4],
        explanation: "(None provided)"
    },
    {
        id: 39,
        text: "Which AWS service can a company use to manage encryption keys in the cloud?",
        options: [
        "AWS License Manager",
        "AWS Certificate Manager (ACM)",
        "AWS CloudHSM",
        "AWS Directory Service",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided; repeated from Q8, but included as per document flow)"
    },
    {
        id: 40,
        text: "A company wants to store its files in the AWS Cloud. Users need to be able to download these files directly using a public URL. Which AWS service or feature will meet this requirement?",
        options: [
        "Amazon Redshift",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon S3",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 41,
        text: "A company is using AWS for all its IT infrastructure. The company’s developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves. Which AWS service should the developers use to meet these requirements?",
        options: [
        "AWS CloudFormation",
        "AWS CodeBuild",
        "AWS Elastic Beanstalk",
        "AWS CodeDeploy",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 42,
        text: "A company wants to gain insights from its data and build interactive data visualization dashboards. Which AWS service will meet these requirements?",
        options: [
        "Amazon SageMaker",
        "Amazon Rekognition",
        "Amazon QuickSight",
        "Amazon Kinesis",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 43,
        text: "A cloud engineer wants to store data in Amazon S3. The engineer will access some of the data yearly and some of the data daily. Which S3 storage class will meet these requirements MOST cost-effectively?",
        options: [
        "S3 Standard",
        "S3 Glacier Deep Archive",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "S3 Intelligent-Tiering",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "When access patterns change, the S3 Intelligent-Tiering will optimize storage costs by automatically moving data to the most cost-effective storage tier."
    },
    {
        id: 44,
        text: "Which of the following are economic benefits of using the AWS Cloud? (Choose two.)",
        options: [
        "Consumption-based pricing",
        "Perpetual licenses",
        "Economies of scale",
        "AWS Enterprise Support at no additional cost",
        "Bring-your-own-hardware model",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "(None provided)"
    },
    {
        id: 45,
        text: "A user is moving a workload from a local data center to an architecture that is distributed between the local data center and the AWS Cloud. Which type of migration is this?",
        options: [
        "On-premises to cloud native",
        "Hybrid to cloud native",
        "On-premises to hybrid",
        "Cloud native to hybrid",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 46,
        text: "Which AWS service provides users with AWS issued reports, certifications, accreditations, and third-party attestations?",
        options: [
        "AWS Artifact",
        "AWS Trusted Advisor",
        "AWS Health Dashboard",
        "AWS Config",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "(None provided)"
    },
    {
        id: 47,
        text: "A company needs to create and publish interactive business intelligence dashboards. The dashboards require insights that are powered by machine learning. Which AWS service or tool will meet these requirements?",
        options: [
        "AWS Glue Studio",
        "Amazon QuickSight",
        "Amazon Redshift",
        "Amazon Athena",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 48,
        text: "A company needs to store infrequently used data for data archives and long-term backups. Which AWS service or storage class will meet these requirements MOST cost-effectively?",
        options: [
        "Amazon FSx for Lustre (Amazon EBS)",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon S3 Glacier Flexible Retrieval",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 49,
        text: "A company runs an on-premises contact center for customers. The company needs to migrate to a cloud-based solution that can deliver artificial intelligence features to improve user experience. Which AWS service will meet these requirements?",
        options: [
        "AWS Wavelength",
        "AWS IAM Identity Center (AWS Single Sign-On)",
        "AWS Direct Connect",
        "Amazon Connect",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 50,
        text: "A company needs the ability to acquire resources when the resources are needed. The company also needs the ability to release the resources when the resources are no longer needed. Which AWS concept represents the company’s goals?",
        options: [
        "Scalability",
        "Sustainability",
        "Elasticity",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 51,
        text: "A company wants to use Amazon EC2 instances for a stable production workload that will run for 1 year. Which instance purchasing option meets these requirements MOST cost-effectively?",
        options: [
        "Dedicated Hosts",
        "Reserved Instances",
        "On-Demand Instances",
        "Spot Instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 52,
        text: "A company wants to use AWS. The company has stringent requirements about low-latency access to on-premises systems and data residency. Which AWS service should the company use to design a solution that meets these requirements?",
        options: [
        "AWS Wavelength",
        "AWS Transit Gateway",
        "AWS Ground Station",
        "AWS Outposts",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 53,
        text: "A company wants to log in securely to Linux Amazon EC2 instances. How can the company accomplish this goal?",
        options: [
        "Use SSH keys.",
        "Use a VPN.",
        "Use end-to-end encryption.",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "(None provided)"
    },
    {
        id: 54,
        text: "A company wants to use a serverless compute service for an application. Which AWS service will meet this requirement?",
        options: [
        "AWS Lambda",
        "AWS CloudFormation",
        "AWS Elastic Beanstalk",
        "Elastic Load Balancing",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "(None provided)"
    },
    {
        id: 55,
        text: "A company wants a solution that will automatically adjust the number of Amazon EC2 instances that are being used based on the current load. Which AWS offering will meet these requirements?",
        options: [
        "Dedicated Hosts",
        "Placement groups",
        "Auto Scaling groups",
        "Reserved Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 56,
        text: "A company is building AWS architecture to deliver real-time data feeds from an on-premises data center into an application that runs on AWS. The company needs a consistent network connection with minimal latency. What should the company use to connect the application and the data center to meet these requirements?",
        options: [
        "AWS Direct Connect",
        "Public internet",
        "AWS VPN",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "(None provided)"
    },
    {
        id: 57,
        text: "A company plans to migrate its custom marketing application and order-processing application to AWS. The company needs to deploy the applications on different types of instances with various configurations of CPU, memory, storage, and networking capacity. Which AWS service should the company use to meet these requirements?",
        options: [
        "AWS Lambda",
        "Amazon Cognito",
        "Amazon Athena",
        "Amazon EC2",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 58,
        text: "A company wants to monitor and block malicious HTTP and HTTPS requests that its Amazon CloudFront distributions receive. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon GuardDuty",
        "AWS WAF",
        "Amazon Inspector",
        "Amazon Detective",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 59,
        text: "Which AWS services can host PostgreSQL databases? (Choose two.)",
        options: [
        "Amazon S3",
        "Amazon Aurora",
        "Amazon EC2",
        "Amazon OpenSearch Service",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 2],
        explanation: "(None provided)"
    },
    {
        id: 60,
        text: "Which AWS service can generate information that can be used by external auditors?",
        options: [
        "Amazon Cognito",
        "Amazon FSx",
        "AWS Config",
        "Amazon Inspector",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 61,
        text: "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
        options: [
        "AWS VPN",
        "Amazon Connect",
        "AWS Direct Connect",
        "Internet gateway",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 62,
        text: "A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which solution achieves this goal?",
        options: [
        "Use EC2 instances in multiple AWS Regions.",
        "Use EC2 instances in multiple edge locations.",
        "Use EC2 instances in the same Availability Zone but in different AWS Regions.",
        "Use Amazon CloudFront with the EC2 instances configured as the source.",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "(None provided)"
    },
    {
        id: 63,
        text: "Which AWS service allows for file sharing between multiple Amazon EC2 instances?",
        options: [
        "AWS Direct Connect",
        "AWS Snowball Edge",
        "AWS Backup",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 64,
        text: "A company needs to manage multiple logins across AWS accounts within the same organization in AWS Organizations. Which AWS service should the company use to meet this requirement?",
        options: [
        "Amazon VPC",
        "Amazon GuardDuty",
        "Amazon Cognito",
        "AWS IAM Identity Center",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 65,
        text: "A company uses Amazon WorkSpaces. Which task is the responsibility of AWS, according to the AWS shared responsibility model?",
        options: [
        "Set up multi-factor authentication (MFA) for each WorkSpaces user account.",
        "Ensure the environmental safety and security of the AWS infrastructure that hosts WorkSpaces.",
        "Provide security for WorkSpaces user accounts through AWS Identity and Access Management (IAM).",
        "Configure AWS CloudTrail to log API calls and user activity.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 66,
        text: "A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS. Which AWS service should the company use to meet this requirement?",
        options: [
        "AWS Lambda",
        "Amazon Route 53",
        "Amazon CloudFront",
        "AWS Direct Connect",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "(None provided)"
    },
    {
        id: 67,
        text: "A company uses a third-party identity provider (IdP). The company wants to provide its employees with access to AWS accounts and services without requiring another set of login credentials. Which AWS service will meet this requirement?",
        options: [
        "AWS Directory Service",
        "Amazon Cognito",
        "AWS IAM Identity Center",
        "AWS Resource Access Manager (AWS RAM)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "(None provided)"
    },
    {
        id: 68,
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
        explanation: "(None provided)"
    },
    {
        id: 69,
        text: "Which AWS service gives users on-demand, self-service access to AWS compliance control reports?",
        options: [
        "AWS Config",
        "Amazon GuardDuty",
        "AWS Trusted Advisor",
        "AWS Artifact",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "(None provided)"
    },
    {
        id: 70,
        text: "A company runs a legacy workload in an on-premises data center. The company wants to migrate the workload to AWS. The company does not want to make any changes to the workload. Which migration strategy should the company use?",
        options: [
        "Repurchase",
        "Replatform",
        "Rehost",
        "Refactor",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Rehosting is the ideal strategy for migrating a legacy workload to AWS when the goal is to maintain the existing application unchanged. This approach allows for a straightforward migration with minimal adjustments."
    },
];

export const awsCCPQuestions8: Question[] = [
    {
        id: 1,
        text: "A company is planning to migrate applications to the AWS Cloud. During a system audit, the company finds that its content management system (CMS) application is incompatible with cloud environments. Which migration strategies will help the company to migrate the CMS application with the LEAST effort? (Choose two.)",
        options: [
        "Retire",
        "Rehost",
        "Repurchase",
        "Replatform",
        "Refactor",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "For an incompatible application, the least-effort strategies are to Retire (decommission it if no longer needed) or Repurchase (replace it with a cloud-native SaaS version)."
    },
    {
        id: 2,
        text: "Which of the following are AWS best practice recommendations for the use of AWS Identity and Access Management (IAM)? (Choose two.)",
        options: [
        "Use the AWS account root user for daily access",
        "Use access keys and secret access keys on Amazon EC2",
        "Rotate credentials on a regular basis",
        "Create a shared set of access keys for system administrators",
        "Configure multi-factor authentication (MFA)",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 4],
        explanation: "Regularly rotating credentials and enabling MFA are core IAM security best practices."
    },
    {
        id: 3,
        text: "Which option is AWS responsible for under the AWS shared responsibility model?",
        options: [
        "Network and firewall configuration",
        "Client-side data encryption",
        "Management of user permissions",
        "Hardware and infrastructure",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS manages the physical hardware, virtualization layer, and global infrastructure."
    },
    {
        id: 4,
        text: "A company wants to run a graph query that provides credit card users' names, addresses, and transactions. The company wants the graph to show if the names, addresses, and transactions indicate possible fraud. Which AWS database service will meet these requirements?",
        options: [
        "Amazon DocumentDB (with MongoDB compatibility)",
        "Amazon Timestream",
        "Amazon DynamoDB",
        "Amazon Neptune",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon Neptune is a fully managed graph database perfect for fraud detection, social networks, and highly connected datasets."
    },
    {
        id: 5,
        text: "Which AWS service provides machine learning capability to detect and analyze content in images and videos?",
        options: [
        "Amazon Connect",
        "Amazon Lightsail",
        "Amazon Personalize",
        "Amazon Rekognition",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Amazon Rekognition provides pre-trained ML for image and video analysis (faces, objects, text, etc.)."
    },
    {
        id: 6,
        text: "A company wants its AWS usage to be more sustainable. The company wants to track, measure, review, and forecast polluting emissions that result from its AWS applications. Which AWS service or tool can the company use to meet these requirements?",
        options: [
        "AWS Health Dashboard",
        "AWS customer carbon footprint tool",
        "AWS Support Center",
        "Amazon QuickSight",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "The AWS Customer Carbon Footprint Tool provides detailed emissions tracking and forecasting."
    },
    {
        id: 7,
        text: "Which AWS service gives users the ability to deploy highly repeatable infrastructure configurations?",
        options: [
        "AWS CloudFormation",
        "AWS CodeDeploy",
        "AWS CodeBuild",
        "AWS Systems Manager",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "CloudFormation uses templates to provision and manage infrastructure as code repeatably."
    },
    {
        id: 8,
        text: "A company needs to provide customer service by using voice calls and web chat features. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon Aurora",
        "Amazon Connect",
        "Amazon WorkSpaces",
        "AWS Organizations",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Amazon Connect is a cloud contact center service supporting voice, chat, and omnichannel features."
    },
    {
        id: 9,
        text: "Which AWS service is designed to help users handle large amounts of data in a data warehouse environment?",
        options: [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Aurora",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Amazon Redshift is a fully managed petabyte-scale data warehouse."
    },
    {
        id: 10,
        text: "A company is building a web application using AWS. Which AWS service will help prevent network layer DDoS attacks against the web application?",
        options: [
        "AWS WAF",
        "AWS Firewall Manager",
        "Amazon GuardDuty",
        "AWS Shield",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "AWS Shield (Standard and Advanced) provides always-on DDoS protection, including Layer 3/4 attacks."
    },
    {
        id: 11,
        text: "Which of the following are advantages of moving to the AWS Cloud? (Choose two.)",
        options: [
        "Users can implement all AWS services in seconds",
        "AWS assumes all responsibility for the security of infrastructure and applications",
        "Users experience increased speed and agility",
        "Users benefit from massive economies of scale",
        "Users can move hardware from their data center to the AWS Cloud",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 3],
        explanation: "The cloud offers faster provisioning (agility) and lower costs due to shared infrastructure (economies of scale)."
    },
    {
        id: 12,
        text: "Which AWS compute service gives users the ability to securely and reliably run containers at scale?",
        options: [
        "Amazon Elastic Container Service (Amazon ECS)",
        "Amazon Aurora",
        "Amazon Athena",
        "Amazon Polly",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "ECS is AWS’s fully managed container orchestration service."
    },
    {
        id: 13,
        text: "Which AWS tool or feature acts as a VPC firewall at the subnet level?",
        options: [
        "Security group",
        "Network ACL",
        "Traffic Mirroring",
        "Internet gateway",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Network ACLs are stateless firewalls that operate at the subnet level."
    },
    {
        id: 14,
        text: "A company runs an application on AWS that performs batch jobs. The application is fault-tolerant and can handle interruptions. The company wants to optimize the cost to run the application. Which AWS offering will meet these requirements?",
        options: [
        "Amazon Macie",
        "Amazon Neptune",
        "Amazon EC2 Spot Instances",
        "Amazon EC2 On-Demand Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Spot Instances offer up to 90% savings for fault-tolerant, interruptible workloads like batch processing."
    },
    {
        id: 15,
        text: "Which AWS service can be used to send alerts when a specific Amazon CloudWatch alarm is invoked?",
        options: [
        "AWS CloudTrail",
        "Amazon Simple Notification Service (Amazon SNS)",
        "Amazon Simple Queue Service (Amazon SQS)",
        "Amazon EventBridge",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "SNS is the primary service for sending notifications triggered by CloudWatch alarms."
    },
    {
        id: 16,
        text: "A cloud practitioner wants to use a highly available and scalable DNS service for its AWS workload. Which AWS service will meet this requirement?",
        options: [
        "Amazon Route 53",
        "Amazon Lightsail",
        "AWS Amplify Hosting",
        "Amazon S3",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Route 53 is AWS’s highly available and scalable DNS service."
    },
    {
        id: 17,
        text: "According to the AWS shared responsibility model, which task is the customer’s responsibility?",
        options: [
        "Maintaining the infrastructure needed to run AWS Lambda",
        "Updating the operating system of Amazon DynamoDB instances",
        "Maintaining Amazon S3 infrastructure",
        "Updating the guest operating system on Amazon EC2 instances",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Customers are responsible for the guest OS on EC2 instances."
    },
    {
        id: 18,
        text: "A company is learning about its responsibilities that are related to the management of Amazon EC2 instances. Which tasks for EC2 instances are the company’s responsibility, according to the AWS shared responsibility model? (Choose two.)",
        options: [
        "Install and patch the machine hypervisor",
        "Patch the guest operating system",
        "Encrypt data at rest on associated storage",
        "Install the physical hardware and cabling",
        "Provide physical security for the EC2 instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 2],
        explanation: "Customers manage OS patching and data encryption on EC2."
    },
    {
        id: 19,
        text: "A company runs MySQL database workloads on self-managed servers in an on-premises data center. The company wants to migrate the database workloads to an AWS managed service. Which migration strategy should the company use?",
        options: [
        "Rehost",
        "Repurchase",
        "Refactor",
        "Replatform",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Moving to a managed service like Amazon RDS with minimal code changes is Replatforming."
    },
    {
        id: 20,
        text: "A company is planning to migrate a monolithic application to AWS. The company wants to modernize the application by splitting it into microservices. The company will deploy the microservices on AWS. Which migration strategy should the company use?",
        options: [
        "Rehost",
        "Repurchase",
        "Replatform",
        "Refactor",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Breaking a monolith into microservices requires significant code changes → Refactor."
    },
    {
        id: 21,
        text: "A company wants to implement detailed tracking of its cloud costs by department and project. Which AWS feature or service should the company use?",
        options: [
        "Consolidated billing",
        "Cost allocation tags",
        "AWS Marketplace",
        "AWS Budgets",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Cost allocation tags allow granular cost tracking by department, project, etc."
    },
    {
        id: 22,
        text: "A user wants to invoke an AWS Lambda function when an Amazon EC2 instance enters the “stopping” state. Which AWS service is appropriate for this use case?",
        options: [
        "Amazon EventBridge",
        "AWS Config",
        "Amazon Simple Notification Service (Amazon SNS)",
        "AWS CloudFormation",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "EventBridge captures EC2 state change events and can trigger Lambda functions."
    },
    {
        id: 23,
        text: "A company has a MariaDB database on premises. The company wants to move the data to the AWS Cloud. Which AWS service will host this database with the LEAST amount of operational overhead?",
        options: [
        "Amazon RDS",
        "Amazon Neptune",
        "Amazon S3",
        "Amazon DynamoDB",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon RDS supports MariaDB as a fully managed relational database."
    },
    {
        id: 24,
        text: "Which AWS service or feature supports governance, compliance, and risk auditing of AWS accounts?",
        options: [
        "Multi-factor authentication (MFA)",
        "AWS Lambda",
        "Amazon Simple Notification Service (Amazon SNS)",
        "AWS CloudTrail",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "CloudTrail logs all API activity for auditing and compliance."
    },
    {
        id: 25,
        text: "Which AWS Cloud design principle is a company using when the company implements AWS CloudTrail?",
        options: [
        "Activate traceability",
        "Use serverless compute architectures",
        "Perform operations as code",
        "Go global in minutes",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "CloudTrail enables traceability of all actions in the account (Well-Architected Framework principle)."
    },
    {
        id: 26,
        text: "A company needs a threat detection service that will continuously monitor its AWS accounts, workloads, and Amazon S3 buckets for malicious activity and unauthorized behavior. Which AWS service meets these requirements?",
        options: [
        "AWS Shield",
        "AWS Firewall Manager",
        "Amazon GuardDuty",
        "Amazon Inspector",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "GuardDuty continuously monitors for threats using ML and threat intelligence."
    },
    {
        id: 27,
        text: "A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback. Which task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)?",
        options: [
        "Realign teams to focus on products and value streams",
        "Create new value propositions with new products and services",
        "Use a new data and analytics platform to create actionable insights",
        "Migrate and modernize legacy infrastructure",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The People perspective in AWS CAF emphasizes agile, product-focused team structures."
    },
    {
        id: 28,
        text: "A company wants to rightsize its Amazon EC2 instances. Which configuration change will meet this requirement with the LEAST operational overhead?",
        options: [
        "Add EC2 instances in another Availability Zone",
        "Change the size and type of the EC2 instances based on utilization",
        "Convert the payment method from On-Demand to Savings Plans",
        "Reprovision the EC2 instances with a larger instance type",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Rightsizing = adjusting instance type/size based on actual utilization metrics."
    },
    {
        id: 29,
        text: "Which AWS service supports user sign-up functionality and authentication to mobile and web applications?",
        options: [
        "Amazon Cognito",
        "AWS Config",
        "Amazon GuardDuty",
        "AWS Systems Manager",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Amazon Cognito provides user sign-up, sign-in, and access control."
    },
    {
        id: 30,
        text: "Which benefit of the AWS Cloud helps companies achieve lower usage costs because of the aggregate usage of all AWS users?",
        options: [
        "No need to guess capacity",
        "Ability to go global in minutes",
        "Economies of scale",
        "Increased speed and agility",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Shared infrastructure across millions of customers drives lower costs."
    },
    {
        id: 31,
        text: "Which task is the responsibility of the customer, according to the AWS shared responsibility model?",
        options: [
        "Patch the Amazon DynamoDB operating system",
        "Secure Amazon CloudFront edge locations by allowing physical access according to the principle of least privilege",
        "Protect the hardware that runs AWS services",
        "Use AWS Identity and Access Management (IAM) according to the principle of least privilege",
        "Patching the guest operating system on Amazon EC2 instances",
    ],
        correctAnswer: 4,
        correctAnswers: [4],
        explanation: "Customers manage the guest OS on EC2."
    },
    {
        id: 32,
        text: "A company wants to manage its cloud resources by using infrastructure as code (IaC) templates. The company needs to meet compliance requirements. Which AWS service should the company use to meet these requirements?",
        options: [
        "AWS Artifact",
        "AWS Resource Explorer",
        "AWS License Manager",
        "AWS Service Catalog",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Service Catalog allows sharing approved, compliant IaC templates."
    },
    {
        id: 33,
        text: "A systems administrator wants to monitor the CPU utilization of a company’s Amazon EC2 instances. Which AWS service can provide this information?",
        options: [
        "AWS Config",
        "AWS Trusted Advisor",
        "AWS CloudTrail",
        "Amazon CloudWatch",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "CloudWatch collects and tracks metrics such as CPU utilization."
    },
    {
        id: 34,
        text: "A company wants to migrate all of its on-premises infrastructure to the AWS Cloud. Before migration, the company wants estimate of costs for running its as-is infrastructure. Which AWS service or principle should the company use to meet this requirement?",
        options: [
        "AWS Pricing Calculator",
        "AWS Well-Architected Framework",
        "AWS shared responsibility model",
        "AWS Cloud Adoption Framework (AWS CAF)",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The AWS Pricing Calculator helps estimate monthly costs based on current usage."
    },
    {
        id: 35,
        text: "An independent software vendor wants to deliver and share its custom Amazon Machine Images (AMIs) to prospective customers. Which AWS service will meet these requirements?",
        options: [
        "AWS Marketplace",
        "AWS Data Exchange",
        "Amazon EC2",
        "AWS Organizations",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "AWS Marketplace allows ISVs to publish and sell AMIs."
    },
    {
        id: 36,
        text: "Which component must be attached to a VPC to enable inbound internet access?",
        options: [
        "NAT gateway",
        "VPC endpoint",
        "VPN connection",
        "Internet gateway",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "An Internet Gateway provides a path for traffic to/from the internet."
    },
    {
        id: 37,
        text: "Which AWS service supports a company’s ability to treat infrastructure as code?",
        options: [
        "AWS CodeDeploy",
        "AWS Elastic Beanstalk",
        "Amazon API Gateway",
        "AWS CloudFormation",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "CloudFormation is AWS’s primary Infrastructure-as-Code service."
    },
    {
        id: 38,
        text: "A company is building an application that will receive millions of database queries each second. The company needs the data store for the application to scale to meet these needs. Which AWS service will meet this requirement?",
        options: [
        "Amazon DynamoDB",
        "AWS Cloud9",
        "Amazon ElastiCache for Memcached",
        "Amazon Neptune",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "DynamoDB seamlessly scales to handle millions of requests per second."
    },
    {
        id: 39,
        text: "An AWS user wants to proactively detect when an instance or account might be compromised or if there are threats from attacks. Which AWS service should the user choose?",
        options: [
        "Amazon GuardDuty",
        "AWS WAF",
        "AWS Shield",
        "Amazon Inspector",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "GuardDuty continuously monitors for compromised credentials and malicious activity."
    },
    {
        id: 40,
        text: "Which AWS Support plan provides the full set of AWS Trusted Advisor checks at the LOWEST cost?",
        options: [
        "AWS Developer Support",
        "AWS Business Support",
        "AWS Enterprise Support",
        "AWS Enterprise On-Ramp Support",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Business Support includes all Trusted Advisor checks at the lowest cost tier that offers them."
    },
    {
        id: 41,
        text: "A company’s application is running on Amazon EC2 instances. The company is planning a partial migration to a serverless architecture in the next year and wants to pay for resources up front. Which AWS purchasing option will optimize the company’s costs?",
        options: [
        "Convertible Reserved Instances",
        "Spot Instances",
        "EC2 Instance Savings Plans",
        "Compute Savings Plans",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Compute Savings Plans provide the most flexibility and highest discount when moving from EC2 to Lambda/Fargate (serverless)."
    },
    {
        id: 42,
        text: "A retail company is building a new mobile app. The company is evaluating whether to build the app at an on-premises data center or in the AWS Cloud. Which of the following are benefits of building this app in the AWS Cloud? (Choose two.)",
        options: [
        "A large, upfront capital expense and low variable expenses",
        "Increased speed for trying out new projects",
        "Complete control over the physical security of the infrastructure",
        "Flexibility to scale up in minutes as the application becomes popular",
        "Ability to pick the specific data centers that will host the application servers",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 3],
        explanation: "AWS offers rapid experimentation (speed/agility) and elastic scaling without upfront hardware costs."
    },
    {
        id: 43,
        text: "A company must archive its documents by using a write-once, read-many (WORM) model to meet legal and compliance obligations. Which feature of Amazon S3 can the company use to meet this requirement?",
        options: [
        "S3 Versioning",
        "S3 Object Lock",
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Vault Lock",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "S3 Glacier Vault Lock applies WORM policies to archived objects for compliance."
    },
    {
        id: 44,
        text: "A company has batch workloads that need to run for short periods of time on Amazon EC2. The workloads can handle interruptions and can start again from where they ended. What is the MOST cost-effective EC2 instance purchasing option to meet these requirements?",
        options: [
        "Reserved Instances",
        "Spot Instances",
        "Dedicated Instances",
        "On-Demand Instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Spot Instances are the cheapest option for interruptible, fault-tolerant batch jobs."
    },
    {
        id: 45,
        text: "A company needs to deploy a PostgreSQL database into Amazon RDS. The database must be highly available and fault tolerant. Which AWS solution should the company use to meet these requirements?",
        options: [
        "Amazon RDS with a single Availability Zone",
        "Amazon RDS snapshots",
        "Amazon RDS with multiple Availability Zones",
        "AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Multi-AZ RDS automatically fails over to a standby replica in another AZ."
    },
    {
        id: 46,
        text: "What is the MOST secure way to store passwords on AWS?",
        options: [
        "Store passwords in an Amazon S3 bucket",
        "Store passwords as AWS CloudFormation parameters",
        "Store passwords in AWS Storage Gateway",
        "Store passwords in AWS Secrets Manager",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Secrets Manager is purpose-built for securely storing, rotating, and retrieving credentials."
    },
    {
        id: 47,
        text: "Which statements accurately describe the relationships among components of AWS global infrastructure? (Choose two.)",
        options: [
        "There are more AWS Regions than Availability Zones",
        "There are more edge locations than AWS Regions",
        "An edge location is an Availability Zone",
        "There are more AWS Regions than edge locations",
        "There are more Availability Zones than AWS Regions",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 4],
        explanation: "Multiple AZs exist inside each Region, and there are far more CloudFront edge locations worldwide."
    },
    {
        id: 48,
        text: "Which AWS service provides DNS resolution?",
        options: [
        "Amazon CloudFront",
        "Amazon VPC",
        "Amazon Route 53",
        "AWS Direct Connect",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Route 53 is AWS’s highly available and scalable DNS service."
    },
    {
        id: 49,
        text: "A company needs to host an application in a specific geographic area to comply with regulations. Which feature of the AWS global infrastructure will help the company meet this requirement?",
        options: [
        "Scalability",
        "Global footprint / Regions",
        "High availability",
        "Edge locations",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Regions allow the company to choose the exact geographic location for data residency."
    },
    {
        id: 50,
        text: "An e-commerce company plans to move its data center workload to the AWS Cloud to support highly dynamic usage patterns. Which benefits make the AWS Cloud cost-effective for the migration of this type of workload? (Choose two.)",
        options: [
        "Reliability",
        "Security",
        "Elasticity",
        "High availability",
        "Pay-as-you-go pricing",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 4],
        explanation: "Elastic scaling and pay-as-you-go eliminate over-provisioning costs for variable workloads."
    },
    {
        id: 51,
        text: "When designing AWS workloads to be operational even when there are component failures, what is an AWS best practice?",
        options: [
        "Perform quarterly disaster recovery tests",
        "Place the main component on the us-east-1 Region",
        "Design for automatic failover to healthy resources",
        "Design workloads to fit on a single Amazon EC2 instance",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "The Reliability pillar of the Well-Architected Framework emphasizes automatic failover."
    },
    {
        id: 52,
        text: "Which of the following can the AWS Pricing Calculator do?",
        options: [
        "Calculate monthly AWS costs",
        "Calculate historical AWS costs",
        "Provide in-depth information about AWS pricing strategies",
        "Provide users with access to their monthly bills",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "The Pricing Calculator estimates future monthly costs based on planned usage."
    },
    {
        id: 53,
        text: "Which AWS solution gives companies the ability to use protocols such as NFS to store and retrieve objects in Amazon S3?",
        options: [
        "Amazon FSx for Lustre",
        "AWS Storage Gateway volume gateway",
        "AWS Storage Gateway file gateway",
        "Amazon Elastic File System (Amazon EFS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "File Gateway presents S3 buckets as NFS/SMB file shares."
    },
    {
        id: 54,
        text: "A user has been granted permission to change their own IAM user password. Which AWS services can the user use to change the password? (Choose two.)",
        options: [
        "AWS Command Line Interface (AWS CLI)",
        "AWS Key Management Service (AWS KMS)",
        "AWS Management Console",
        "AWS Resource Access Manager (AWS RAM) E. AWS Secrets Manager",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "Users can change their own passwords via the Console or CLI."
    },
    {
        id: 55,
        text: "Which task is the responsibility of the customer, according to the AWS shared responsibility model?",
        options: [
        "Patching the guest operating system on Amazon EC2 instances – correct",
        "Control physical access to an AWS data center.",
        "Control access to AWS underlying hardware.",
        "Patch a host operating system that is deployed on Amazon S3.",
    ],
        correctAnswer: 0,
        correctAnswers: [],
        explanation: "Customers manage the guest OS and applications on EC2."
    },
    {
        id: 56,
        text: "Which AWS service or feature provides a firewall at the subnet level within a VPC?",
        options: [
        "Security group",
        "Network ACL",
        "Elastic network interface",
        "AWS WAF",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Network ACLs are stateless firewalls applied at the subnet level."
    },
    {
        id: 57,
        text: "A company wants to use automated video analysis to identify employees that are accessing its offices. Which AWS service will meet this requirement?",
        options: [
        "Amazon Rekognition",
        "Amazon Polly",
        "Amazon Cognito",
        "AWS Lambda",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Rekognition provides facial recognition and analysis in images/videos."
    },
    {
        id: 58,
        text: "A company needs to host a web server on Amazon EC2 instances for at least 1 year. The web server cannot tolerate interruption. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
        options: [
        "Partial Upfront Reserved Instances",
        "Spot Instances",
        "No Upfront Reserved Instances",
        "On-Demand Instances",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Reserved Instances (especially Partial Upfront) offer the best savings for steady-state, long-running workloads."
    },
    {
        id: 59,
        text: "Which guidelines are best practices for using AWS Identity and Access Management (IAM)? (Choose two.)",
        options: [
        "Share access keys",
        "Create individual IAM users",
        "Use inline policies instead of customer managed policies",
        "Grant maximum privileges to IAM users E. Use groups to assign permissions to IAM users",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 3],
        explanation: "Individual users + role/group-based permissions follow the principle of least privilege."
    },
    {
        id: 60,
        text: "Which advantage of cloud computing allows users to scale resources up and down based on the amount of load that an application supports?",
        options: [
        "Go global in minutes",
        "Stop guessing capacity / Elasticity",
        "Benefit from massive economies of scale",
        "Trade fixed expense for variable expense",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Elasticity is the ability to automatically scale resources based on demand."
    },
    {
        id: 61,
        text: "A company is requesting Payment Card Industry (PCI) reports that validate the operating effectiveness of AWS security controls. How should the company obtain these reports?",
        options: [
        "Contact AWS Support",
        "Download reports from AWS Artifact",
        "Download reports from AWS Security Hub",
        "Request them via email",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS Artifact is the central place for compliance reports including PCI DSS."
    },
    {
        id: 62,
        text: "An e-commerce company wants to distribute traffic between the Amazon EC2 instances that host its website. Which AWS service or resource will meet these requirements?",
        options: [
        "Application Load Balancer",
        "AWS WAF",
        "AWS CloudHSM",
        "AWS Direct Connect",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "ALB distributes HTTP/HTTPS traffic across multiple EC2 targets."
    },
    {
        id: 63,
        text: "Which AWS services or features form the AWS Cloud global infrastructure? (Choose two.)",
        options: [
        "Availability Zones",
        "Amazon ElastiCache",
        "AWS Regions",
        "Amazon S3 E. Amazon VPC",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "Regions and Availability Zones are the foundational components of AWS global infrastructure."
    },
    {
        id: 64,
        text: "According to the AWS shared responsibility model, which of the following are AWS responsibilities? (Choose two.)",
        options: [
        "Network infrastructure and virtualization of infrastructure",
        "Security of application data",
        "Guest operating systems",
        "Physical security of hardware  E. Credentials and policies",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: "AWS manages the cloud (physical security, hardware, hypervisor); customers manage in the cloud."
    },
    {
        id: 65,
        text: "A company uses Amazon RDS as its database service. The company wants to encrypt its databases and database backups. Which party manages the encryption of the database clusters and database snapshots, according to the AWS shared responsibility model?",
        options: [
        "AWS",
        "The company",
        "AWS Marketplace partners",
        "Third-party partners",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Customers are responsible for enabling and managing encryption (KMS keys) for RDS."
    },
    {
        id: 66,
        text: "A company is hosting a web application on Amazon EC2 instances. The company wants to implement custom conditions to filter and control inbound web traffic. Which AWS service will meet these requirements?",
        options: [
        "Amazon GuardDuty",
        "AWS WAF",
        "Amazon Macie",
        "AWS Shield",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS WAF allows custom web traffic filtering rules (SQLi, XSS, IP blocking, etc.)."
    },
    {
        id: 67,
        text: "A company wants to maintain bandwidth throughput and provide a more consistent network experience than public internet-based connections. Which AWS service should the company choose?",
        options: [
        "AWS VPN",
        "AWS Direct Connect",
        "Amazon Connect",
        "AWS Transit Gateway",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Direct Connect provides dedicated, private, consistent bandwidth from on-premises to AWS."
    },
    {
        id: 68,
        text: "A company has temporary workload that is also variable. The company needs to use Amazon EC2 instances for the workload. The EC2 instances need to handle short bursts of work that cannot stop before finishing. Which purchase option will meet these requirements?",
        options: [
        "Spot Instances",
        "On-Demand Instances",
        "Savings Plans",
        "Reserved Instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "On-Demand is best for short, unpredictable, uninterruptible workloads."
    },
    {
        id: 69,
        text: "A company’s employees are working from home. The company wants its employees to use their personal devices to connect to a managed workstation in the AWS Cloud. Which AWS service should the company use to provide the remote environment?",
        options: [
        "Amazon WorkSpaces",
        "AWS Cloud9",
        "AWS Outposts",
        "Amazon Lightsail",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "WorkSpaces provides fully managed virtual Windows/Linux desktops."
    },
    {
        id: 70,
        text: "A company needs to use SQL syntax to perform a direct query of objects in an Amazon S3 bucket. Which AWS service can the company use to meet this requirement?",
        options: [
        "AWS Glue",
        "Amazon Athena",
        "AWS Lambda",
        "Amazon Kinesis",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Athena allows standard SQL queries directly on data stored in S3."
    },
];

export const awsCCPQuestions9: Question[] = [
    {
        id: 1,
        text: "A company uses Amazon RDS for a product database. The company wants to ensure the database is highly available. Which feature of Amazon RDS will meet this requirement?",
        options: [
        "Read replicas",
        "Blue/green deployment",
        "Multi-AZ deployment",
        "Reserved Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because Multi-AZ deployment provides high availability by automatically replicating the database to a standby instance in another Availability Zone, enabling failover in case of issues."
    },
    {
        id: 2,
        text: "Which AWS service provides serverless compute for use with containers?",
        options: [
        "Amazon Simple Queue Service (Amazon SQS)",
        "AWS Fargate",
        "AWS Elastic Beanstalk",
        "Amazon SageMaker",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and EKS, allowing users to run containers without managing servers."
    },
    {
        id: 3,
        text: "A company is using multiple AWS accounts for different business teams. The finance team wants to receive one bill for all of the company's accounts. Which AWS service or tool should the finance team use to meet this requirement?",
        options: [
        "AWS Organizations",
        "AWS Trusted Advisor",
        "Cost Explorer",
        "AWS Budgets",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because AWS Organizations enables consolidated billing across multiple accounts, allowing the finance team to receive a single bill for all linked accounts."
    },
    {
        id: 4,
        text: "A company needs a firewall that will control network connections to and from a single Amazon EC2 instance. This firewall will not control network connections to and from other instances that are in the same subnet. Which AWS service or feature can the company use to meet these requirements?",
        options: [
        "Network ACL",
        "AWS WAF",
        "Route table",
        "Security group",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because security groups act as instance-level firewalls, controlling inbound and outbound traffic for specific EC2 instances without affecting others in the subnet."
    },
    {
        id: 5,
        text: "A company is planning to use the Amazon EC2 instances as web servers. Customers from around the world will use the web servers. Most customers will use the web servers only during certain hours of the day. How should the company deploy the EC2 instances to achieve the LOWEST operational cost?",
        options: [
        "In multiple Availability Zones",
        "In an Auto Scaling group",
        "In a placement group",
        "In private subnets",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because an Auto Scaling group can automatically adjust the number of instances based on demand, scaling down during low-usage hours to minimize costs."
    },
    {
        id: 6,
        text: "Which benefit is always free of charge with AWS, regardless of a user’s AWS Support plan?",
        options: [
        "AWS Developer Support",
        "AWS Developer Forums",
        "Programmatic case management",
        "AWS technical account manager (TAM)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS Developer Forums (rebranded as AWS re:Post) are freely accessible to all users for community support, regardless of the support plan tier."
    },
    {
        id: 7,
        text: "A company uses Amazon EC2 instances to run its application. The application needs to be available and running continuously for three or more years. What type of EC2 instance should the company purchase for a discount on the EC2 pricing?",
        options: [
        "Reserved Instances",
        "Spot Instances",
        "On-Demand Instances",
        "EC2 Fleet",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because Reserved Instances offer significant discounts for long-term commitments (1 or 3 years), ideal for predictable, continuous workloads."
    },
    {
        id: 8,
        text: "A company needs to perform an audit of recent AWS account activity. The audit will investigate who initiated an event and what actions were performed. Which AWS service should the company use to meet these requirements?",
        options: [
        "AWS Config",
        "Amazon Rekognition",
        "AWS CloudTrail",
        "Amazon Simple Notification Service (Amazon SNS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because AWS CloudTrail logs API calls and account activity, providing details on who performed actions and what was done for auditing purposes."
    },
    {
        id: 9,
        text: "Which design principles are included in the reliability pillar of the AWS Well-Architected Framework? (Choose two.)",
        options: [
        "Automatically recover from failure",
        "Grant everyone access to increase AWS service quotas",
        "Stop guessing capacity",
        "Design applications to run in a single Availability Zone",
        "Plan to increase AWS service quotas first in a secondary AWS Region",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "Options A and C are correct because the reliability pillar emphasizes automatic recovery (e.g., via auto-scaling and backups) and stopping capacity guessing (e.g., by using demand-based scaling) to ensure systems are resilient."
    },
    {
        id: 10,
        text: "A company needs to use AWS technology to deploy a static website. Which solution meets this requirement with the LEAST amount of operational overhead?",
        options: [
        "Deploy the website on Amazon EC2",
        "Host the website on AWS Elastic Beanstalk",
        "Deploy the website with Amazon Lightsail",
        "Host the website on Amazon S3",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because Amazon S3 provides a fully managed, serverless way to host static websites with minimal overhead, including automatic scaling and no server management."
    },
    {
        id: 11,
        text: "Which recommendation can AWS Cost Explorer provide to help reduce cost?",
        options: [
        "Use a specific database engine",
        "Change the programming language for an application",
        "Deploy a specific operating system",
        "Terminate an idle instance",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because AWS Cost Explorer analyzes usage and can recommend terminating or rightsizing idle resources like instances to reduce unnecessary costs."
    },
    {
        id: 12,
        text: "A company wants to deploy an application in multiple Availability Zones in a single AWS Region. Which benefit will this deployment provide to the company?",
        options: [
        "Improved connection performance for global customers",
        "Resilient architecture and a highly available solution",
        "Reduced overall data storage costs",
        "Ability to shut down an Availability Zone during periods of low demand",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because deploying across multiple Availability Zones in a region provides fault tolerance and high availability by isolating failures to one zone."
    },
    {
        id: 13,
        text: "Which AWS service can companies use to subscribe to RSS feeds for updates about all AWS service issues?",
        options: [
        "Amazon Simple Notification Service (Amazon SNS)",
        "AWS Health Dashboard",
        "AWS Config",
        "AWS CodeCommit",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS Health Dashboard (formerly Personal Health Dashboard) allows subscriptions to RSS feeds for service health updates and issues."
    },
    {
        id: 14,
        text: "Which Amazon EC2 Reserved Instances term commitment will give users the MOST cost savings?",
        options: [
        "1 year",
        "2 years",
        "3 years",
        "5 years",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because 3-year Reserved Instances commitments typically offer the highest discounts compared to shorter terms (note: AWS offers 1-year and 3-year terms; 5 years isn't standard)."
    },
    {
        id: 15,
        text: "A company is running big data analytics and massive parallel computations on its AWS test and development servers. The company can tolerate occasional downtime. What is the MOST cost-effective Amazon EC2 purchasing option for the company to use?",
        options: [
        "On-Demand Instances",
        "Spot Instances",
        "Reserved Instances",
        "Savings Plans",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because Spot Instances offer up to 90% discounts for interruptible workloads, suitable for tolerant applications like big data analytics."
    },
    {
        id: 16,
        text: "A company runs Amazon EC2 instances in a research lab. The instances run for 3 hours each week and cannot be interrupted. What is the MOST cost-effective instance purchasing option to meet these requirements?",
        options: [
        "Compute Savings Plan",
        "On-Demand Instances",
        "Convertible Reserved Instances",
        "Spot Instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because On-Demand Instances provide reliable, non-interruptible compute without upfront commitment, cost-effective for short, predictable weekly runs (user chose Compute Savings Plan - incorrect; Savings Plans are for consistent usage, but On-Demand fits low usage better without commitment)."
    },
    {
        id: 17,
        text: "A new AWS user needs to interact with AWS Support by using API calls. Which AWS Support plan will meet this requirement MOST cost-effectively?",
        options: [
        "AWS Basic Support",
        "AWS Developer Support",
        "AWS Business Support",
        "AWS Enterprise Support",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS Developer Support is the lowest paid plan that allows programmatic (API) case management for support interactions."
    },
    {
        id: 18,
        text: "A company migrated to the AWS Cloud. Now the company pays for services on an as-needed basis. Which advantage of cloud computing is the company benefiting from?",
        options: [
        "Stop spending money running and maintaining data centers",
        "Increase speed and agility",
        "Go global in minutes",
        "Trade fixed expense for variable expense",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because paying as-needed represents trading capex (fixed) for opex (variable), a key cloud benefit."
    },
    {
        id: 19,
        text: "A company will run a predictable compute workload on Amazon EC2 instances for the next 3 years. The workload is critical for the company. The company wants to optimize costs to run the workload. Which solution will meet these requirements?",
        options: [
        "Spot Instances",
        "Dedicated Hosts",
        "Savings Plans",
        "On-Demand Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because Savings Plans offer flexible discounts for consistent usage over 1 or 3 years, suitable for critical, predictable workloads."
    },
    {
        id: 20,
        text: "A company wants to estimate the cost for its AWS architecture solution before migration. Which AWS service or feature will meet this requirement?",
        options: [
        "Amazon Detective",
        "AWS Budgets",
        "AWS Resource Explorer",
        "AWS Pricing Calculator",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because AWS Pricing Calculator allows estimating costs for proposed architectures before deployment."
    },
    {
        id: 21,
        text: "A company wants to centrally manage its employee's access to multiple AWS accounts. Which AWS service or feature should the company use to meet this requirement?",
        options: [
        "AWS Identity and Access Management Access Analyzer",
        "AWS Secrets Manager",
        "AWS IAM Identity Center",
        "AWS Security Token Service (AWS STS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because AWS IAM Identity Center (formerly SSO) provides centralized access management across multiple AWS accounts."
    },
    {
        id: 22,
        text: "A university receives a grant to conduct research by using AWS services. The research team needs to make sure the grant money lasts for the entire school year. The team has decided on a monthly allocation that adds up to the total grant amount. Which AWS service or feature will notify the team if spending exceeds the planned amount?",
        options: [
        "AWS Budgets",
        "Cost Explorer",
        "Cost allocation tags",
        "Cost categories",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because AWS Budgets allows setting custom budgets and sends notifications when spending exceeds thresholds."
    },
    {
        id: 23,
        text: "A company has migrated its workload to the AWS Cloud. The company wants to optimize existing Amazon EC2 resources. Which AWS services or tools provide this functionality? (Choose two.)",
        options: [
        "AWS Elastic Beanstalk",
        "AWS Cost Explorer",
        "Amazon Detective",
        "AWS Compute Optimizer",
        "AWS Billing Conductor",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 3],
        explanation: "Options B and D are correct because AWS Cost Explorer analyzes costs for optimization, and AWS Compute Optimizer recommends rightsizing for EC2 instances."
    },
    {
        id: 24,
        text: "A company with multiple accounts and teams wants to set up a new multi-account AWS environment. Which AWS service supports this requirement?",
        options: [
        "AWS CloudFormation",
        "AWS Control Tower",
        "AWS Config",
        "Amazon Virtual Private Cloud (Amazon VPC)",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS Control Tower sets up and governs secure multi-account environments with best practices."
    },
    {
        id: 25,
        text: "A company needs access to checks and recommendations that help the company follow AWS best practices for cost optimization, security, fault tolerance, performance, and service quotas. Which combination of an AWS service and AWS Support plan on the AWS account will meet these requirements?",
        options: [
        "AWS Trusted Advisor with AWS Developer Support",
        "AWS Health Dashboard with AWS Enterprise Support",
        "AWS Trusted Advisor with AWS Business Support",
        "AWS Health Dashboard with AWS Enterprise On-Ramp Support",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because AWS Trusted Advisor provides best practice checks, and Business Support (or higher) unlocks full access to all checks."
    },
    {
        id: 26,
        text: "Which AWS service helps users plan and track their server and application inventory migration data to AWS?",
        options: [
        "Amazon CloudWatch",
        "AWS DataSync",
        "AWS Migration Hub",
        "AWS Application Migration Service",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because AWS Migration Hub centralizes tracking of migration data and progress across tools."
    },
    {
        id: 27,
        text: "Which AWS team or offering helps users accelerate cloud adoption through paid engagements in any of several specialty practice areas?",
        options: [
        "AWS Enterprise Support",
        "AWS solutions architects",
        "AWS Professional Services",
        "AWS account managers",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because AWS Professional Services offers paid consulting engagements to accelerate adoption in specialized areas."
    },
    {
        id: 28,
        text: "A company needs to purchase Amazon EC2 instances to support an application that will run continuously for more than 1 year. Which EC2 instance purchasing option meets these requirements MOST cost-effectively?",
        options: [
        "Dedicated Instances",
        "Spot Instances",
        "Reserved Instances",
        "On-Demand Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because Reserved Instances provide discounts for commitments over 1 year for continuous runs."
    },
    {
        id: 29,
        text: "Which programming languages does AWS Cloud Development Kit (AWS CDK) currently support? (Choose two.)",
        options: [
        "Python",
        "Swift",
        "TypeScript",
        "Ruby",
        "PHP",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "Options A and C are correct because AWS CDK supports Python and TypeScript (among others like Java, C#, Go) for infrastructure as code."
    },
    {
        id: 30,
        text: "Which AWS service or feature gives users the ability to provision AWS infrastructure programmatically?",
        options: [
        "AWS Cloud Development Kit (AWS CDK)",
        "Amazon CodeGuru",
        "AWS Config",
        "AWS CodeCommit",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because AWS CDK allows defining cloud infrastructure in code and provisioning it programmatically."
    },
    {
        id: 31,
        text: "Which AWS service or feature allows a company to have its own logically isolated section of the AWS Cloud?",
        options: [
        "AWS VPN",
        "Availability Zones",
        "Amazon Virtual Private Cloud (Amazon VPC)",
        "AWS Regions",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because Amazon VPC provides a logically isolated virtual network in the AWS Cloud."
    },
    {
        id: 32,
        text: "Which of the following actions are controlled with AWS Identity and Access Management (IAM)? (Choose two.)",
        options: [
        "Control access to AWS service APIs and to other specific resources",
        "Provide intelligent threat detection and continuous monitoring",
        "Protect the AWS environment using multi-factor authentication (MFA)",
        "Grant users access to AWS data centers",
        "Provide firewall protection for applications from common web attacks",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: "Options A and C are correct because IAM controls API access and permissions, and supports MFA for user protection."
    },
    {
        id: 33,
        text: "Why are AWS CloudFormation templates used?",
        options: [
        "To reduce provisioning time by using automation",
        "To transfer existing infrastructure to another company",
        "To reuse on-premises infrastructure in the AWS Cloud",
        "To deploy large infrastructure with no cost implications",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because CloudFormation templates automate infrastructure provisioning as code, reducing time and errors."
    },
    {
        id: 34,
        text: "Which group shares responsibility with AWS for security and compliance of AWS accounts and resources?",
        options: [
        "Third-party vendors",
        "Customers",
        "Reseller partners",
        "Internet providers",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because under the shared responsibility model, customers handle security in the cloud (e.g., data, access)."
    },
    {
        id: 35,
        text: "A company is using AWS Identity and Access Management (IAM). Who can manage the access keys of the AWS account root user?",
        options: [
        "IAM users in the same account that have been granted permission",
        "IAM roles in any account that have been granted permission",
        "IAM users and roles that have been granted permission",
        "The AWS account owner",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because only the root account owner can manage root access keys; IAM users/roles cannot, even with permissions."
    },
    {
        id: 36,
        text: "A company needs an event history of which AWS resources the company has created. Which AWS service will provide this information?",
        options: [
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "Amazon Aurora",
        "Amazon EventBridge",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS CloudTrail logs resource creation and API activity for auditing."
    },
    {
        id: 37,
        text: "A company wants to run relationship databases in the AWS Cloud. The company wants to use a managed service that will install the database and run regular software updates. Which AWS service will meet these requirements?",
        options: [
        "Amazon S3",
        "Amazon RDS",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon DynamoDB",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because Amazon RDS is a managed relational database service that handles installation, patching, and updates."
    },
    {
        id: 38,
        text: "Which AWS service provides a fully managed graph database for highly connected datasets?",
        options: [
        "Amazon DynamoDB",
        "Amazon RDS",
        "Amazon Neptune",
        "Amazon Aurora",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because Amazon Neptune is designed for graph databases, supporting property graphs and RDF for connected data."
    },
    {
        id: 39,
        text: "A company's cloud environment includes Amazon EC2 instances and Application Load Balancers. The company wants to improve protections for its cloud resources against DDoS attacks. The company also wants to have real-time visibility into any DDoS attacks. Which AWS service will meet these requirements?",
        options: [
        "AWS Shield Standard",
        "AWS Firewall Manager",
        "AWS Shield Advanced",
        "Amazon GuardDuty",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because AWS Shield Advanced provides DDoS protection with real-time visibility and response support."
    },
    {
        id: 40,
        text: "A company wants to update its online data processing application by implementing container-based services that run for 4 hours at a time. The company does not want to provision or manage server instances. Which AWS service will meet these requirements?",
        options: [
        "AWS Lambda",
        "AWS Fargate",
        "Amazon EC2",
        "AWS Elastic Beanstalk",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS Fargate runs containers serverlessly, ideal for short-running tasks without server management."
    },
    {
        id: 41,
        text: "Which AWS service enables users to create copies of resources across AWS Regions?",
        options: [
        "Amazon ElastiCache",
        "AWS CloudFormation",
        "AWS CloudTrail",
        "AWS Systems Manager",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS CloudFormation can replicate stacks across regions using templates."
    },
    {
        id: 42,
        text: "Which task is the responsibility of AWS, according to the AWS shared responsibility model?",
        options: [
        "Apply guest operating system patches to Amazon EC2 instances",
        "Provide monitoring of human resources information management (HRIM) systems",
        "Perform automated backups of Amazon RDS instances",
        "Optimize the costs of running AWS services",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because AWS manages underlying infrastructure, including automated backups for services like RDS."
    },
    {
        id: 43,
        text: "A user needs to perform a one-time backup of an Amazon Elastic Block Store (Amazon EBS) volume that is attached to an Amazon EC2 instance. What is the MOST operationally efficient way to perform this backup?",
        options: [
        "Attach another EBS volume to the EC2 instance, and copy the contents",
        "Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect",
        "Create an EBS snapshot of the volume",
        "Create a custom script to copy the EBS file contents to Amazon S3",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because EBS snapshots are a built-in, efficient way to back up volumes point-in-time."
    },
    {
        id: 44,
        text: "A developer who has no AWS Cloud experience wants to use AWS technology to build a web application. Which AWS service should the developer use to start building the application?",
        options: [
        "Amazon SageMaker",
        "AWS Lambda",
        "Amazon Lightsail",
        "Amazon Elastic Container Service (Amazon ECS)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because Amazon Lightsail provides simple, low-cost virtual servers and resources for beginners to build apps quickly."
    },
    {
        id: 45,
        text: "A company wants to manage access and permissions for its third-party software as a service (SaaS) applications. The company wants to use a portal where end users can access assigned AWS accounts and AWS Cloud applications. Which AWS service should the company use to meet these requirements?",
        options: [
        "Amazon Cognito",
        "AWS IAM Identity Center (AWS Single Sign-On)",
        "AWS Identity and Access Management (IAM)",
        "AWS Directory Service for Microsoft Active Directory",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS IAM Identity Center provides a portal for SSO access to AWS accounts and SaaS apps."
    },
    {
        id: 46,
        text: "Which AWS service is designed for users running workloads that include a NoSQL database?",
        options: [
        "Amazon RDS",
        "Amazon S3",
        "Amazon Redshift",
        "Amazon DynamoDB",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because Amazon DynamoDB is a managed NoSQL database service."
    },
    {
        id: 47,
        text: "A company has a website on AWS. The company wants to deliver the website to a worldwide audience and provide low-latency response times for global users. Which AWS service will meet these requirements?",
        options: [
        "AWS CloudFormation",
        "Amazon CloudFront",
        "Amazon ElastiCache",
        "Amazon DynamoDB",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because Amazon CloudFront is a CDN that caches content globally for low-latency delivery."
    },
    {
        id: 48,
        text: "A company wants to add a conversational chatbot to its website. Which AWS service can the company use to meet this requirement?",
        options: [
        "Amazon Textract",
        "Amazon Lex",
        "AWS Glue",
        "Amazon Rekognition",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because Amazon Lex builds conversational interfaces like chatbots using voice and text."
    },
    {
        id: 49,
        text: "Which AWS service or feature can be used to monitor for potential disk write spikes on a system that is running on Amazon EC2?",
        options: [
        "AWS CloudTrail",
        "AWS Health Dashboard",
        "AWS Trusted Advisor",
        "Amazon CloudWatch",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because Amazon CloudWatch monitors metrics like disk writes on EC2 instances."
    },
    {
        id: 50,
        text: "A company has applications that control on-premises factory equipment. Which AWS service should the company use to run these applications with the LEAST latency?",
        options: [
        "AWS Outposts",
        "Amazon EC2",
        "AWS Lambda",
        "AWS Fargate",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because AWS Outposts extends AWS infrastructure on-premises for low-latency access to local equipment."
    },
    {
        id: 51,
        text: "Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on organizing an inventory of data products in a data catalog?",
        options: [
        "Operations",
        "Governance",
        "Business",
        "Platform",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because the Governance perspective in AWS CAF includes data governance practices like cataloging data products."
    },
    {
        id: 52,
        text: "A company runs its production workload in the AWS Cloud. The company needs to choose one of the AWS Support Plans. Which of the AWS Support Plans will meet these requirements at the LOWEST cost?",
        options: [
        "Developer",
        "Enterprise On-Ramp",
        "Enterprise",
        "Business",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because Developer Support is the lowest-cost paid plan for production workloads, offering business-hour support (user chose Business - incorrect)."
    },
    {
        id: 53,
        text: "What is the primary use case for Amazon GuardDuty?",
        options: [
        "Prevention of DDoS attacks",
        "Protection against SQL injection attacks",
        "Automatic monitoring for threats to AWS workloads",
        "Automatic provisioning of AWS resources",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because Amazon GuardDuty is an intelligent threat detection service for AWS accounts and workloads."
    },
    {
        id: 54,
        text: "Which VPC component can a company use to set up a virtual firewall at the Amazon EC2 instance level?",
        options: [
        "Network ACL",
        "Security group",
        "Route table",
        "NAT gateway",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because security groups provide instance-level firewall rules for EC2."
    },
    {
        id: 55,
        text: "A developer needs to interact with AWS by using the AWS CLI. Which security feature or AWS service must be provisioned in the developer's account to meet this requirement?",
        options: [
        "User name and password",
        "AWS Systems Manager",
        "Root password access",
        "AWS access key",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because AWS access keys (access key ID and secret access key) are required for CLI authentication."
    },
    {
        id: 56,
        text: "A food delivery company needs to block users in certain countries from accessing its website. Which AWS service should the company use to meet this requirement?",
        options: [
        "AWS WAF",
        "AWS Control Tower",
        "Amazon Fraud Detector",
        "Amazon Pinpoint",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because AWS WAF allows geo-blocking rules to restrict access based on country."
    },
    {
        id: 57,
        text: "A company needs to use Amazon S3 to store audio files that are each 5 megabytes in size. The company will rarely access the files, but the company must be able to retrieve the files immediately. Which S3 storage class will meet these requirements MOST cost-effectively?",
        options: [
        "S3 Standard",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Deep Archive",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because S3 Standard-IA offers low-cost storage for infrequently accessed data with immediate retrieval."
    },
    {
        id: 58,
        text: "A company wants to set up a secure network connection from on premises to the AWS Cloud within 1 week. Which solution will meet these requirements?",
        options: [
        "AWS Direct Connect",
        "Amazon VPC",
        "AWS Site-to-Site VPN",
        "Edge location",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because AWS Site-to-Site VPN can be set up quickly (within days) for secure connectivity over the internet."
    },
    {
        id: 59,
        text: "What is a customer responsibility under the AWS shared responsibility model when using AWS Lambda?",
        options: [
        "Maintenance of the underlying Lambda hardware",
        "Maintenance of the Lambda networking infrastructure",
        "The code and libraries that run in the Lambda functions",
        "The Lambda server software",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because customers manage the code and dependencies in Lambda functions, while AWS handles the infrastructure."
    },
    {
        id: 60,
        text: "Which tasks are the responsibility of AWS according to the AWS shared responsibility model? (Choose two.)",
        options: [
        "Configure AWS Identity and Access Management (IAM)",
        "Configure security groups on Amazon EC2 instances",
        "Secure the access of physical AWS facilities",
        "Patch applications that run on Amazon EC2 instances",
        "Perform infrastructure patching and maintenance",
    ],
        correctAnswer: 2,
        correctAnswers: [2, 4],
        explanation: "Options C and E are correct because AWS secures physical facilities and patches the underlying infrastructure."
    },
    {
        id: 61,
        text: "A company's compliance officer wants to review the AWS Service Organization Control (SOC) reports. Which AWS service or feature should the compliance officer use to complete this task?",
        options: [
        "AWS Artifact",
        "AWS Concierge Support",
        "AWS Support",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because AWS Artifact provides on-demand access to compliance reports like SOC."
    },
    {
        id: 62,
        text: "A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. Which AWS service should the company use?",
        options: [
        "AWS Config",
        "AWS Secrets Manager",
        "AWS CloudTrail",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: "Option A is correct because AWS Config records configurations, evaluates changes, and can remediate non-compliant resources."
    },
    {
        id: 63,
        text: "A company plans to perform a one-time migration of a large dataset with millions of files from its on-premises data center to the AWS Cloud. Which AWS service should the company use for the migration?",
        options: [
        "AWS Database Migration Service (AWS DMS)",
        "AWS DataSync",
        "AWS Migration Hub",
        "AWS Application Migration Service",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS DataSync is designed for transferring large datasets with millions of files efficiently to AWS storage."
    },
    {
        id: 64,
        text: "A company wants to develop an accessibility application that will convert text into audible speech. Which AWS service will meet this requirement?",
        options: [
        "Amazon MQ",
        "Amazon Polly",
        "Amazon Neptune",
        "Amazon Timestream",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because Amazon Polly is a text-to-speech service for converting text to lifelike speech."
    },
    {
        id: 65,
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
        explanation: "Options A and C are correct because security groups and network ACLs use CIDR notation for IP rules."
    },
    {
        id: 66,
        text: "A company needs to set up dedicated network connectivity between its on-premises data center and the AWS Cloud. The network cannot use the public internet. Which AWS service or feature will meet these requirements?",
        options: [
        "AWS Transit Gateway",
        "AWS VPN",
        "Amazon CloudFront",
        "AWS Direct Connect",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because AWS Direct Connect provides private, dedicated connectivity without using the public internet."
    },
    {
        id: 67,
        text: "A company needs to use dashboards and charts to analyze insights from business data. Which AWS service will provide the dashboards and charts for these insights?",
        options: [
        "Amazon Macie",
        "Amazon Aurora",
        "Amazon QuickSight",
        "AWS CloudTrail",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because Amazon QuickSight is a BI service for creating dashboards and visualizations from data."
    },
    {
        id: 68,
        text: "A company wants to migrate its on-premises infrastructure to the AWS Cloud. Which advantage of cloud computing will help the company reduce upfront costs?",
        options: [
        "Go global in minutes",
        "Increase speed and agility",
        "Benefit from massive economies of scale",
        "Trade fixed expense for variable expense",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: "Option D is correct because cloud computing shifts from upfront capital expenses to pay-as-you-go variable expenses."
    },
    {
        id: 69,
        text: "A company is designing workloads in the AWS Cloud. The company wants the workloads to perform their intended function correctly and consistently throughout their lifecycle. Which pillar of the AWS Well-Architected Framework does this goal represent?",
        options: [
        "Operational excellence",
        "Security",
        "Reliability",
        "Performance efficiency",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: "Option C is correct because the Reliability pillar focuses on workloads performing consistently and recovering from failures."
    },
    {
        id: 70,
        text: "Which AWS service is used to temporarily provide federated security credentials to access AWS resources?",
        options: [
        "Amazon GuardDuty",
        "AWS Simple Token Service (AWS STS)",
        "AWS Secrets Manager",
        "AWS Certificate Manager",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "Option B is correct because AWS STS issues temporary security credentials for federated access to resources."
    },
];

export const awsCCPQuestions10: Question[] = [
    {
        id: 1,
        text: "What is a benefit of using an Elastic Load Balancing (ELB) load balancer with applications running in the AWS Cloud?",
        options: [
        "An ELB will automatically scale resources to meet capacity needs.",
        "An ELB can balance traffic across multiple compute resources.",
        "An ELB can span multiple AWS Regions.",
        "An ELB can balance traffic between multiple internet gateways.",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 2,
        text: "A company needs to convert video files and audio files to a format that will play on smartphones. Which AWS service will meet this requirement?",
        options: [
        "Amazon Comprehend",
        "Amazon Rekognition",
        "Amazon Elastic Transcoder",
        "Amazon Polly",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 3,
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
        id: 4,
        text: "A company needs to have the ability to set up infrastructure for new applications in minutes. Which advantage of cloud computing will help the company meet this requirement?",
        options: [
        "Trade fixed expense for variable expense",
        "Go global in minutes",
        "Increase speed and agility",
        "Stop guessing capacity",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 5,
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
        id: 6,
        text: "A company plans to migrate to the AWS Cloud. The company wants to gather information about its on-premises data center. Which AWS service should the company use to meet these requirements?",
        options: [
        "AWS Application Discovery Service",
        "AWS DataSync",
        "AWS Storage Gateway",
        "AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 7,
        text: "Which tasks are responsibilities of the customer, according to the AWS shared responsibility model? (Choose two.)",
        options: [
        "Secure the virtualization layer.",
        "Encrypt data and maintain data integrity.",
        "Patch the Amazon RDS operating system.",
        "Maintain identity and access management controls.",
        "Secure Availability Zones.",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 3],
        explanation: ""
    },
    {
        id: 8,
        text: "An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost-effective manner. Which AWS Cloud features will help the company meet this requirement? (Choose two.)",
        options: [
        "Cross-Region workload deployment",
        "Pay-as-you-go pricing",
        "Built-in AWS CloudTrail audit capabilities",
        "Auto Scaling policies",
        "Centralized logging",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 3],
        explanation: ""
    },
    {
        id: 9,
        text: "A developer needs to use a standardized template to create copies of a company's AWS architecture for development, test, and production environments. Which AWS service should the developer use to meet this requirement?",
        options: [
        "AWS Cloud Map",
        "AWS CloudFormation",
        "Amazon Cloud Front",
        "AWS CloudTrail",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 10,
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
        id: 11,
        text: "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
        options: [
        "Shred disk drives before they leave a data center.",
        "Prevent customers from gathering packets or collecting traffic at the hypervisor level.",
        "Patch the guest operating system with the latest security patches.",
        "Maintain security systems that provide physical monitoring of data centers.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 12,
        text: "Which AWS service uses speech-to-text conversion to help users create meeting notes?",
        options: [
        "Amazon Polly",
        "Amazon Textract",
        "Amazon Rekognition",
        "Amazon Transcribe",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 13,
        text: "Which AWS service or tool provides users with a graphical interface that they can use to manage AWS services?",
        options: [
        "AWS Copilot",
        "AWS CLI",
        "AWS Management Console",
        "AWS software development kits (SDKs)",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 14,
        text: "A company has a workload that will run continuously for 1 year. The workload cannot tolerate service interruptions. Which Amazon EC2 purchasing option will be MOST cost-effective?",
        options: [
        "All Upfront Reserved Instances",
        "Partial Upfront Reserved Instances",
        "Dedicated Instances",
        "On-Demand Instances",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 15,
        text: "A company migrated its systems to the AWS Cloud. The systems are rightsized, and a security review did not reveal any issues. The company must ensure that additional developments, integrations, changes, and system usage growth do not jeopardize this optimized AWS infrastructure. Which AWS service should the company use to report ongoing optimization and security?",
        options: [
        "AWS Trusted Advisor",
        "AWS Health Dashboard",
        "Amazon Connect",
        "AWS Systems Manager",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 16,
        text: "Which AWS service integrates with other AWS services to provide the ability to encrypt data at rest?",
        options: [
        "AWS Key Management Service (AWS KMS)",
        "AWS Certificate Manager (ACM)",
        "AWS Identity and Access Management (IAM)",
        "AWS Security Hub",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 17,
        text: "A company wants to track the monthly cost and usage of all Amazon EC2 instances in a specific AWS environment. Which AWS service or tool will meet these requirements?",
        options: [
        "AWS Cost Anomaly Detection",
        "AWS Budgets",
        "AWS Compute Optimizer",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 18,
        text: "A company wants the ability to automatically acquire resources as needed and release the resources when they are no longer needed. Which cloud concept describes this functionality?",
        options: [
        "Availability",
        "Elasticity",
        "Durability",
        "Reliability",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 19,
        text: "A company wants a cost-effective option when running its applications in an Amazon EC2 instance for short time periods. The applications can be interrupted. Which EC2 instance type will meet these requirements?",
        options: [
        "Spot Instances",
        "On-Demand Instances",
        "Reserved Instances",
        "Dedicated Instances",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 20,
        text: "A company has an AWS Business Support plan. The company needs to gain access to the AWS DDoS Response Team (DRT) to help mitigate DDoS events. Which AWS service or resource must the company use to meet these requirements?",
        options: [
        "AWS Shield Standard",
        "AWS Enterprise Support",
        "AWS WAF",
        "AWS Shield Advanced",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 21,
        text: "Which AWS service or tool provides a visualization of historical AWS spending patterns and projections of future AWS costs?",
        options: [
        "AWS Cost and Usage Report",
        "AWS Budgets",
        "Cost Explorer",
        "Amazon Cloud Watch",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 22,
        text: "A company is migrating to the AWS Cloud instead of running its infrastructure on premises. Which of the following are advantages of this migration? (Choose two.)",
        options: [
        "Elimination of the need to perform security auditing",
        "Increased global reach and agility",
        "Ability to deploy globally in minutes",
        "Elimination of the cost of IT staff members",
        "Redundancy by default for all compute services",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 2],
        explanation: ""
    },
    {
        id: 23,
        text: "Which AWS service uses edge locations to cache content?",
        options: [
        "Amazon Kinesis",
        "Amazon Simple Queue Service (Amazon SQS)",
        "Amazon CloudFront",
        "Amazon Route 53",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 24,
        text: "A company wants to securely access an Amazon S3 bucket from an Amazon EC2 instance without accessing the internet. What should the company use to accomplish this goal?",
        options: [
        "VPN connection",
        "Internet gateway",
        "VPC endpoint",
        "NAT gateway",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 25,
        text: "A company wants an AWS service that can automate software deployment in Amazon EC2 instances and on-premises instances. Which AWS service will meet this requirement?",
        options: [
        "AWS CodeCommit",
        "AWS CodeBuild",
        "AWS CodeDeploy",
        "AWS CodePipeline",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 26,
        text: "Which AWS services are serverless? (Choose two.)",
        options: [
        "AWS Fargate",
        "Amazon Managed Streaming for Apache Kafka",
        "Amazon EMR",
        "Amazon S3",
        "Amazon EC2",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 3],
        explanation: ""
    },
    {
        id: 27,
        text: "A company wants to continuously improve processes and procedures to deliver business value. Which pillar of the AWS Well-Architected Framework does this goal represent?",
        options: [
        "Performance efficiency",
        "Operational excellence",
        "Reliability",
        "Sustainability",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 28,
        text: "Which of the following is a customer responsibility according to the AWS shared responsibility model?",
        options: [
        "Apply security patches for Amazon S3 infrastructure devices.",
        "Provide physical security for AWS datacenters.",
        "Install operating system updates on LambdaEdge.",
        "Implement multi-factor authentication (MFA) for IAM user accounts.",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 29,
        text: "Which AWS service should a company use to organize, characterize, and search large numbers of images?",
        options: [
        "Amazon Transcribe",
        "Amazon Rekognition",
        "Amazon Aurora",
        "Amazon QuickSight",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 30,
        text: "Which AWS service is always available free of charge to users?",
        options: [
        "Amazon Athena",
        "AWS Identity and Access Management (IAM)",
        "AWS Secrets Manager",
        "Amazon ElastiCache",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 31,
        text: "A company needs to run some of its workloads on premises to comply with regulatory guidelines. The company wants to use the AWS Cloud to run workloads that are not required to be on premises. The company also wants to be able to use the same API calls for the on-premises workloads and the cloud workloads. Which AWS service or feature should the company use to meet these requirements?",
        options: [
        "Dedicated Hosts",
        "AWS Outposts",
        "Availability Zones",
        "AWS Wavelength",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 32,
        text: "What is the recommended use case for Amazon EC2 On-Demand Instances?",
        options: [
        "A steady-state workload that requires a particular EC2 instance configuration for a long period of time",
        "A workload that can be interrupted for a project that requires the lowest possible cost",
        "An unpredictable workload that does not require a long-term commitment",
        "A workload that is expected to run for longer than 1 year",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 33,
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
        id: 34,
        text: "An administrator observed that multiple AWS resources were deleted yesterday. Which AWS service will help identify the cause and determine which user deleted the resources?",
        options: [
        "AWS CloudTrail",
        "Amazon Inspector",
        "Amazon GuardDuty",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 35,
        text: "To assist companies with Payment Card Industry Data Security Standard (PCI DSS) compliance in the cloud, AWS provides:",
        options: [
        "physical Inspections of data centers by appointment",
        "required PCI compliance certifications for any application running on AWS.",
        "an AWS Attestation of Compliance (AOC) report for specific AWS services.",
        "professional PCI compliance services.",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 36,
        text: "In which situations should a company create an IAM user instead of an IAM role?",
        options: [
        "When an application that runs on Amazon EC2 instances requires access to other AWS services",
        "When the company creates AWS access credentials for individuals",
        "When the company creates an application that runs on a mobile phone that makes requests to AWS",
        "When the company needs to add users to IAM groups",
        "When users are authenticated in the corporate network and want to be able to use AWS without having to sign in a second time",
    ],
        correctAnswer: 1,
        correctAnswers: [1, 3],
        explanation: ""
    },
    {
        id: 37,
        text: "A company hosts a web application on AWS. The company has improved the availability of its application by provisioning multiple Amazon EC2 instances. The company wants to distribute its traffic across the EC2 instances while providing a single point of contact to the web clients. Which AWS service can distribute the traffic to multiple EC2 instances as targets?",
        options: [
        "VPC endpoints",
        "Application Load Balancer",
        "NAT gateway",
        "Internet gateway",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 38,
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
        id: 39,
        text: "Which design principle is related to the reliability pillar according to the AWS Well-Architected Framework?",
        options: [
        "Test recovery procedures",
        "Experiment more often",
        "Go global in minutes",
        "Analyze and attribute to expenditure",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 40,
        text: "A company stores data in an Amazon S3 bucket.Which task is the responsibility of AWS?",
        options: [
        "Configure an S3 Lifecycle policy.",
        "Activate S3 Versioning.",
        "Configure S3 bucket policies.",
        "Protect the infrastructure that supports S3 storage",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 41,
        text: "A company wants to transfer a virtual Windows Server 2022 that is currently running in its own data center to AWS. The company wants to automatically convert the existing server to run directly on AWS infrastructure instead of visualized hardware. Which AWS service will meet these requirements?",
        options: [
        "AWS DataSync",
        "AWS Database Migration Service (AWS DMS)",
        "AWS Application Discovery Service",
        "AWS Application Migration Service",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 42,
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
        id: 43,
        text: "A company deployed an application in multiple AWS Regions around the world. The company wants to improve the application’s performance and availability. Which AWS service will meet these requirements?",
        options: [
        "AWS Global Accelerator",
        "Amazon DataZone",
        "AWS Cloud Map",
        "AWS Auto Scaling",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 44,
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
        id: 45,
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
        id: 46,
        text: "Which option is an advantage of AWS Cloud computing that minimizes variable costs?",
        options: [
        "High availability",
        "Economies of scale",
        "Global reach",
        "Agility",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 47,
        text: "A company wants to migrate its server-based applications to the AWS Cloud. The company wants to determine the total cost of ownership for its compute resources that will be hosted on the AWS Cloud. Which combination of AWS services or tools will meet these requirements? (Choose two.)",
        options: [
        "AWS Pricing Calculator",
        "Migration Evaluator",
        "AWS Support Center",
        "AWS Application Discovery Service",
        "AWS Database Migration Service (AWS DMS)",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 1],
        explanation: ""
    },
    {
        id: 48,
        text: "A company has data lakes designed for high performance computing (HPC) workloads. Which Amazon EC2 instance type should the company use to meet these requirements?",
        options: [
        "General purpose instances",
        "Compute optimized instances",
        "Memory optimized instances",
        "Storage optimized instances",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 49,
        text: "Which benefits does a company gain when the company moves from on-premises IT architecture to the AWS Cloud? (Choose two.)",
        options: [
        "Reduced or eliminated tasks for hardware troubleshooting, capacity planning, and procurement",
        "Elimination of the need for trained IT staff",
        "Automatic security configuration of all applications that are migrated to the cloud",
        "Elimination of the need for disaster recovery planning",
        "Faster deployment of new features and applications",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 4],
        explanation: ""
    },
    {
        id: 50,
        text: "A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback. Which task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)",
        options: [
        "Realign teams to focus on products and value streams.",
        "Create new value propositions with new products and services.",
        "Use agile methods to rapidly iterate and evolve.",
        "Use a new data and analytics platform to create actionable insights.",
        "Migrate and modernize legacy infrastructure.",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 2],
        explanation: ""
    },
    {
        id: 51,
        text: "A company that is planning to migrate to the AWS Cloud is based in an isolated area that has limited internet connectivity. The company needs to perform local data processing on premises. The company needs a solution that can operate without a stable internet connection. Which AWS service will meet these requirements?",
        options: [
        "Amazon S3",
        "AWS Snowball Edge",
        "AWS Storage Gateway",
        "AWS Backup",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 52,
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
        id: 53,
        text: "A company wants to migrate to the AWS Cloud. The company needs the ability to acquire resources when the resources are necessary. The company also needs the ability to release those resources when the resources are no longer necessary. Which architecture concept of the AWS Cloud meets these requirements?",
        options: [
        "Elasticity",
        "Availability",
        "Reliability",
        "Durability",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 54,
        text: "A company wants to deploy a web application as a containerized application. The company wants to use a managed service that can automatically create container images from source code and deploy the containerized application. Which AWS service will meet these requirements?",
        options: [
        "AWS Elastic Beanstalk",
        "Amazon Elastic Container Service (Amazon ECS)",
        "AWS App Runner",
        "Amazon EC2",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 55,
        text: "A company has moved all its infrastructure to the AWS Cloud. To plan ahead for each quarter, the finance team wants to track the cost and usage data of all resources from previous months. The finance team wants to automatically generate reports that contains the data. Which AWS service or feature should the finance team use to meet these requirements?",
        options: [
        "Amazon Detective",
        "AWS Pricing Calculator",
        "AWS Budgets",
        "AWS Savings Plans",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 56,
        text: "Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on real-time insights and answers questions about strategy?",
        options: [
        "Operations",
        "People",
        "Business",
        "Platform",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 57,
        text: "A company wants to migrate critical on-premises production systems to Amazon EC2 instances. The production instances will be used for at least 3 years. The company wants a pricing option that will minimize cost. Which solution will meet these requirements?",
        options: [
        "On-Demand Instances",
        "Reserved Instances",
        "Spot Instances",
        "AWS Free Tier",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 58,
        text: "Which AWS Well-Architected Framework concept represents a system's ability to remain functional when the system encounters operational problems?",
        options: [
        "Consistency",
        "Elasticity",
        "Durability",
        "Latency",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 59,
        text: "Which pillar of the AWS Well-Architected Framework focuses on the ability to recover automatically from service interruptions?",
        options: [
        "Security",
        "Performance efficiency",
        "Operational excellence",
        "Reliability",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 60,
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
        id: 61,
        text: "A company wants to build, train, and deploy machine learning (ML) models. Which AWS service can the company use to meet this requirement?",
        options: [
        "Amazon Personalize",
        "Amazon Comprehend",
        "Amazon Forecast",
        "Amazon SageMaker",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 62,
        text: "Which AWS service or tool provides recommendations to help users get rightsized Amazon EC2 instances based on historical workload usage data?",
        options: [
        "AWS Pricing Calculator",
        "AWS Compute Optimizer",
        "AWS App Runner",
        "AWS Systems Manager",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 63,
        text: "A company wants to explore and analyze data in Amazon S3 by using a programming language. Which AWS service will meet these requirements?",
        options: [
        "Amazon Kendra",
        "Amazon Athena",
        "Amazon Comprehend",
        "Amazon SageMaker",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 64,
        text: "A company needs to run an application on Amazon EC2 instances without interruption. Which EC2 instance purchasing option will meet this requirement MOST cost-effectively?",
        options: [
        "Standard Reserved Instances",
        "Convertible Reserved Instances",
        "On-Demand Instances",
        "Spot Instances",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 65,
        text: "A company wants a fully managed service that centralizes and automates data protection across AWS services and hybrid workloads. Which AWS service will meet these requirements?",
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
        id: 66,
        text: "A company plans to migrate its application from on premises to the AWS Cloud. The company needs to gather usage and configuration data for the application components. Which AWS service will meet these requirements?",
        options: [
        "AWS Database Migration Service (AWS DMS)",
        "AWS Transfer Family",
        "AWS Application Discovery Service",
        "AWS Global Accelerator",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 67,
        text: "Which design principle aligns with performance efficiency pillar of the AWS Well-Architected Framework?",
        options: [
        "Using serverless architectures",
        "Scaling horizontally",
        "Measuring the cost of workloads",
        "Using managed services",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 68,
        text: "A company wants to provide low latency to its users around the world. Which feature of the AWS Cloud meet this requirement?",
        options: [
        "Global infrastructure",
        "Pay as-you-go pricing",
        "Managed services",
        "Economy of scale",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 69,
        text: "Which type of workload should a company run on Amazon EC2 Spot Instances?",
        options: [
        "A steady-state workload that requires a particular EC2 instance configuration for a long period of time",
        "A workload that can be interrupted and can control costs",
        "A steady-state workload that does not require a long-term commitment",
        "A workload that cannot be interrupted and can control costs",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 70,
        text: "A company has multiple AWS accounts. The company needs to receive a consolidated bill from AWS and must centrally manage security and compliance. Which AWS service or feature should the company use to meet these requirements?",
        options: [
        "AWS Cost and Usage Report",
        "AWS Organizations",
        "AWS Config",
        "AWS Security Hub",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
];

export const awsCCPQuestions11: Question[] = [
    {
        id: 1,
        text: "For which use case are Amazon EC2 On-Demand Instances MOST cost-effective?",
        options: [
        "Compute-intensive video transcoding that can be restarted if necessary",
        "An instance in continual use for 1 month to conduct quality assurance tests",
        "An instance that runs a web server that will run for 1 year",
        "An instance that runs a database that will run for 3 years",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 2,
        text: "A company has developed a new In-house application. The company does not have a way to determine or predict the usage demand that the application will create. Which AWS Cloud computing benefit is the company seeking?",
        options: [
        "Easy to use",
        "Cost-effective",
        "Secure",
        "Scalable and high performance",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 3,
        text: "Which AWS offering can analyze a company’s AWS environment to discover security vulnerabilities on Amazon EC2 instances?",
        options: [
        "Amazon Inspector",
        "Amazon Macie",
        "AWS Shield Standard",
        "Security groups",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 4,
        text: "A company plans to onboard new employees that will be working remotely. The company needs to set up Windows virtual desktops to create a working environment for the new employees. The employees must be able access the working environment from anywhere and by using their computer or a web browser. Which AWS service or feature will meet these requirements?",
        options: [
        "Dedicated Hosts",
        "AWS Global Accelerator",
        "Amazon Workspaces",
        "Amazon CloudFront",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 5,
        text: "A company wants to visualize and manage AWS Cloud costs and usage for a specific period of time. Which AWS service or feature will meet these requirements?",
        options: [
        "Cost Explorer",
        "Consolidated billing",
        "AWS Organizations",
        "AWS Budgets",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 6,
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
        id: 7,
        text: "A company purchased Amazon EC2 Standard Reserved Instances (RIs) for a workload in the AWS Cloud. The company needs to move part of the workload to an instance family that does not match the instance family of these Standard RIs. How can the company take advantage of the Standard RIs that it no longer needs?",
        options: [
        "Contact the AWS Support team, and ask the team to sell the Standard RIs",
        "Sell the Standard RIs on the Amazon EC2 Reserved Instance Marketplace",
        "Sell the Standard RIs as a third-party seller on the AWS Marketplace",
        "Convert the Standard RIs to Savings Plans",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 8,
        text: "A company is releasing a business-critical application. Before the release, the company needs strategic planning assistance from AWS. During the release, the company needs AWS infrastructure event management and real-time support. What should the company do to meet these requirements?",
        options: [
        "Access AWS Trusted Advisor",
        "Contact the AWS Partner Network (APN)",
        "Sign up for AWS Enterprise Support",
        "Contact AWS Professional Services",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 9,
        text: "A company wants to improve employee productivity by providing a way for employees to search for questions and retrieve specific answers. The company wants to use a single intelligent search interface. Which AWS service will meet these requirements?",
        options: [
        "Amazon Connect",
        "Amazon Kendra",
        "Amazon Lex",
        "Amazon Comprehend",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 10,
        text: "A company wants an Amazon S3 solution that provides access to object storage within single-digit milliseconds. Which solution will meet these requirements?",
        options: [
        "S3 Express One Zone",
        "S3 Standard",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Instant Retrieval",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 11,
        text: "A company runs an uninterruptible Amazon EC2 workload on AWS 24 hours a day, 7 days a week. The company will require the same instance family and instance type to run the workload for the next 12 months. Which combination of purchasing options should the company choose to MOST optimize costs? (Choose two.)",
        options: [
        "Standard Reserved Instance",
        "Convertible Reserved Instance",
        "Compute Savings Plan",
        "Spot Instance",
        "All Upfront payment",
    ],
        correctAnswer: 0,
        correctAnswers: [0, 4],
        explanation: ""
    },
    {
        id: 12,
        text: "A company wants to run its application's code without having to provision and manage servers. Which AWS service will meet this requirement?",
        options: [
        "AWS Glue",
        "AWS Lambda",
        "AWS CodeDeploy",
        "Amazon CodeGuru",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 13,
        text: "A company is planning to migrate to the AWS Cloud. The company needs to understand the existing on-premises usage and configuration. The company does not want to replicate its workloads to AWS, yet. Which AWS service or tool will meet these requirements?",
        options: [
        "AWS Application Discovery Service",
        "AWS Application Migration Service",
        "Cloud Migration Factory",
        "AWS Transfer Family",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 14,
        text: "A company wants to allow its employees to work remotely from home. The company's employees use Windows or Linux desktops. The company's employees need access from anywhere and at anytime by using any supported devices. Which AWS service will meet these requirements?",
        options: [
        "Amazon Workspaces",
        "Amazon AppStream 2.0",
        "Amazon Keyspaces (for Apache Cassandra)",
        "AWS Cloud9",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 15,
        text: "A company wants to test a new application. Which AWS principle will help the company test the application?",
        options: [
        "Make long-term commitments in exchange for a cost discount.",
        "Scale up and down when needed without any long-term commitments",
        "Have total control over the application infrastructure",
        "Manage all of the maintenance tasks associated with the cloud",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 16,
        text: "A company plans to launch an ecommerce website that contains many images for a product catalog. The company wants to keep the cost of running the website within a specific budget. Which AWS service or tool should the company use to monitor the ongoing costs of the website?",
        options: [
        "AWS Cost Explorer",
        "AWS SDKs",
        "EC2 Image Builder",
        "AWS CloudFormation",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 17,
        text: "A company has deployed several public applications behind Application Load Balancers. The company wants to improve the performance of the applications. Which AWS service will meet these requirements?",
        options: [
        "AWS Global Accelerator",
        "Amazon Connect",
        "Amazon ElastiCache",
        "Amazon CloudWatch",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 18,
        text: "A company has an on-premises application. The application has processing times of less than 5 minutes and is invoked only a few times each day. The company wants to move the application to the AWS Cloud. Which AWS service will support this application MOST cost-effectively?",
        options: [
        "Amazon Elastic Container Service (Amazon ECS)",
        "AWS Lambda",
        "Amazon Elastic Kubernetes Service (Amazon EKS)",
        "Amazon EC2",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 19,
        text: "A company is learning about the perspectives of the AWS Cloud Adoption Framework (AWS CAF). Which perspective of the AWS CAF addresses the strategy management capability?",
        options: [
        "Business perspective",
        "People perspective",
        "Governance perspective",
        "Operations perspective",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 20,
        text: "A company wants to consolidate its call centers to improve the customer voice and chat experience with call center agents. Which AWS service or tool will meet these requirements?",
        options: [
        "Amazon Simple Notification Service (Amazon SNS)",
        "AWS Support Center",
        "Amazon Cognito",
        "Amazon Connect",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 21,
        text: "A company needs to provision uninterruptible Amazon EC2 instances, when needed, and pay for compute capacity by the second. Which EC2 instance purchasing option will meet these requirements?",
        options: [
        "Reserved Instances",
        "Spot Instances",
        "On-Demand Instances",
        "Dedicated Instances",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 22,
        text: "A company needs to block SQL injection attacks. Which AWS service or feature provides this functionality?",
        options: [
        "AWS WAF",
        "Network ACLs",
        "Security groups",
        "AWS Trusted Advisor",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 23,
        text: "A company wants to run its application on Amazon EC2 instances. The company needs to keep the application on-premises to meet a compliance requirement. Which AWS offering will meet these requirements?",
        options: [
        "Dedicated Instances",
        "Amazon CloudFront",
        "AWS Fargate",
        "AWS Outposts",
    ],
        correctAnswer: 3,
        correctAnswers: [3],
        explanation: ""
    },
    {
        id: 24,
        text: "Which AWS service can migrate Amazon EC2 instances from one AWS Region to another?",
        options: [
        "AWS Application Migration Service",
        "AWS Database Migration Service (AWS DMS)",
        "AWS DataSync",
        "AWS Migration Hub",
    ],
        correctAnswer: 0,
        correctAnswers: [0],
        explanation: ""
    },
    {
        id: 25,
        text: "A company wants to connect its supported AWS services and VPCs. The company does not want to expose its internal traffic to the public internet. Which AWS service will meet these requirements?",
        options: [
        "Amazon Inspector",
        "AWS PrivateLink",
        "Amazon Connect",
        "AWS Internet Gateway",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: "AWS PrivateLink allows you to securely connect supported AWS services and VPCs without exposing your internal traffic to the public internet. It provides private connectivity between VPCs, AWS services, and on-premises applications using the AWS network."
    },
    {
        id: 26,
        text: "Which AWS service can manage permissions for AWS resources by using policies?",
        options: [
        "Amazon Inspector",
        "Amazon Detective",
        "AWS Identity and Access Management (IAM)",
        "Amazon GuardDuty",
    ],
        correctAnswer: 2,
        correctAnswers: [2],
        explanation: ""
    },
    {
        id: 27,
        text: "A company needs to run some of its workload in the AWS Cloud. The company needs to keep some of the workload in its own on-site data center due to compliance reasons. Which AWS service will meet these requirements?",
        options: [
        "AWSConfig",
        "AWS Outposts",
        "Amazon Lightsail",
        "Amazon Connect",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
    {
        id: 28,
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
        id: 29,
        text: "A company that operates on-premises servers decides to start a new line of business. The company determines that additional servers are required for the new workloads. Which advantage of cloud computing can help the company to provision additional infrastructure as quickly as possible?",
        options: [
        "Benefit from massive economies of scale",
        "Increase speed and agility",
        "Trade fixed expense for variable expense",
        "Go global in minutes",
    ],
        correctAnswer: 1,
        correctAnswers: [1],
        explanation: ""
    },
];

