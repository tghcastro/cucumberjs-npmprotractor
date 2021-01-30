Feature: Dummy Test with Cucumber

    Scenario: User can inform his profile data
        Given the user
            | Name  | Jimmy           |
            | Email | jimmy@jimmy.com |
        When he inform its data
        And he confirms his data
        Then he should be asked for his interests

    Scenario Outline: User can inform his interests (<preference>)
        Given an user that already informed his profile
        And his preference is "<preference>"
        When he confirms his preference
        Then he should be able to start the payment

        Examples:
            | preference  |
            | I like XBOX |
          #  | I like PS4  |

    # Scenario: Start the payment 
    #     Given an user that already informed his profile
    #     And he also has chosen his preference
    #     When he submit his data for the payment
    #     Then should receive a message that confirm tha is awesome