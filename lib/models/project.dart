

import 'package:dadahtp_portofolio/models/technology.dart';

import '../utils/constants.dart';
import 'link.dart';

class ProjectModel {
  final String project;
  final String title;
  final String description;
  final String? appPhotos;
  final String projectLink;
  final List<TechnologyModel> techUsed;
  List<LinkModel>? links = [];
  final String? buttonText;

  ProjectModel({
    required this.project,
    required this.title,
    required this.description,
    this.appPhotos,
    required this.projectLink,
    required this.techUsed,
    this.buttonText,
    this.links,
  });

  static List<ProjectModel> projects = [
    ProjectModel(
      project: "Flutter App",
      title: "Book Ticket Application UI",
      description:
          "The BookTicket Application is designed to facilitate users in booking tickets online. It features an attractive user interface (UI) that makes it easy for users to view schedules and book tickets with ease.",
      appPhotos: AppConstants.bookTicketImage,
      projectLink: "https://github.com/dadahtaufikpermana/bookticketapplication.git",
      techUsed: [
        TechnologyConstants.flutter,
      ],
      buttonText: "Github Link",
    ),
    ProjectModel(
      project: "Flutter App",
      title: "Quiz Study App",
      description:
          "The Quiz Study application is designed to enhance users' knowledge and skills in the fields of physics, chemistry, mathematics, and basic biology. This application is developed using Flutter technology for the user interface and Firebase for backend services.",
      appPhotos: AppConstants.quizStudyImage,
      projectLink: "git@github.com:dadahtaufikpermana/quiz_study_firebase.git",
      techUsed: [
        TechnologyConstants.flutter,
        TechnologyConstants.firebase,
      ],
      buttonText: "Github Link",
    ),
    ProjectModel(
      project: "Flutter App",
      title: "News App Flutter",
      description:
          "The News App Flutter is a mobile application that allows users to access news articles from various categories. It is developed using Flutter framework and utilizes the NewsAPI as the source of news data. This application was created as a challenge during my participation in the Superbootcamp at ISI (ihsan solusi technology)",
      appPhotos: AppConstants.newsAppImage,
      projectLink: "https://github.com/AgnelSelvan/Smart-Store-Mobile-App",
      techUsed: [
        TechnologyConstants.flutter,
      ],
      buttonText: "Github Link",
    ),
    ProjectModel(
      project: "Flutter App",
      title: "Skinventory",
      description: "The Skinventory app is designed to assist users in documenting their beauty products and keeping track of their expiration dates. It was developed by a team of four individuals during the Superbootcamp at ISI. The application is built using Flutter, Firebase, and local storage. the repostory is private",
      appPhotos: AppConstants.skinventoryImage,
      projectLink: "",
      techUsed: [
        TechnologyConstants.flutter,
        TechnologyConstants.firebase,
      ],
    ),
    ProjectModel(
      project: "Flutter App",
      title: "FoodMarket App",
      description:
          "FoodMarket aims to provide a seamless platform for users to explore and order food from various restaurants and food vendors. The application brings together a wide range of culinary options and simplifies the food ordering process. FoodMarket is a collaborative mobile application developed as a dummy project during training at ISI (Ihsan Solusi Technology). The app is a combination of my expertise as a Flutter developer and the backend development skills of a Python team.",
      appPhotos: AppConstants.foodMarketImage,
      projectLink: "https://www.amazon.com/gp/product/B08669JDX7",
      techUsed: [
        TechnologyConstants.flutter,
        TechnologyConstants.firebase,
      ],
    ),
  ];

  static List<ProjectModel> demos = [
    ProjectModel(
      project: "Flutter App",
      title: "Flutter Web Portfolio",
      description: "",
      appPhotos: AppConstants.portfolioGif,
      projectLink: "https://github.com/dadahtaufikpermana/dadahtaufikp.github.io",
      techUsed: [],
      buttonText: "Github Link",
    ),
  ];
}
