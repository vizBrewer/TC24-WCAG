# Cutting the Curb - HOT Instructions

**Level:** Intermediate

It was presented during Tableau Conference 2024 and uses Tableau Desktop version 2023.4. Some topics might be outdated if you’re looking at this beyond 2024.

**Contents:** 
[📖 Get Started](https://salesforce.quip.com/WTscApadPnWm#temp:C:XAY198645eb854540698a4ca2ca9)
[📈 Your Mission](https://salesforce.quip.com/WTscApadPnWm#temp:C:XAYd72bfba84de84f6bbc0374aed) 
[🦜 Exercise 1:](https://salesforce.quip.com/WTscApadPnWm#temp:C:XAYb52de606747346a6bf21a4f24) 
[🦏 Exercise 2:](https://salesforce.quip.com/WTscApadPnWm#temp:C:XAYc57e590470334481bcd95ef7d)
[🐢 Exercise 3:](https://salesforce.quip.com/WTscApadPnWm#temp:C:XAY1208d2dcb6764010a10e4693f) 
[🐵 Exercise 4:](https://salesforce.quip.com/WTscApadPnWm#temp:C:XAY7918cd3a595d4d04b17622fff)
[🦩 Exercise 5:](https://salesforce.quip.com/WTscApadPnWm#temp:C:XAY86e30beecd414ac69dd9cf506)
[🎁 Wrap Up:](https://salesforce.quip.com/WTscApadPnWm#temp:C:XAYd5e309379f3d41a2b0c4c0a4e)



# 📖 Get Started

## 💥 About Today’s Session

* We will be exploring the various ways to master inclusive data visuals with WCAG principles, allowing you to learn to design universally accessible dashboards, and ensure your analytics are user-friendly and inclusive for all abilities.
* Each exercise is made up of individual steps. The steps are written to provide a bit of a challenge, but we’ve provided detailed answers under each step.
* Click on the ‘Show Answers’ link under a step to see a gif walkthrough of how to complete the step.



## ⭐️ About Designing for Accessibility 

### Why make accessible dashboards? 

Focusing on accessibility when using Tableau not only expands the reach and impact of your work but also aligns with legal, ethical, and social best practices. It can enhance the quality and clarity of your visualizations, benefiting all users and promoting a more inclusive approach to data analysis and presentation. Making your Tableau content accessible and compliant with best practices is important for several reasons, 

**Broader Audience Reach & Ethical Responsibility:** 

* Ensuring your content is accessible means that it can be used and understood by a wider audience, including those with disabilities. Maximize the reach and impact of your work, allowing more people to benefit from the insights you provide. 
* Making your data visualizations accessible demonstrates a commitment to equity and inclusivity, ensuring that everyone, regardless of their abilities, has equal access to information and opportunities for insight.

**Improved Usability for All Users:** 

* The principles of accessibility often lead to better overall usability. Designing for accessibility can result in clearer and more comprehensible visualizations, benefiting all users, not just those with disabilities. 

**Data Literacy and Engagement:** 

* Accessible content can help build data literacy across a broader segment of the population by ensuring that more people can interact with and understand data visualizations. This can lead to greater engagement with your content and more meaningful insights for a wider audience.

**Legal Compliance:** 

* Many regions and sectors have legal requirements for digital accessibility (e.g., the Americans with Disabilities Act in the United States, the European Accessibility Act in the EU). Ensuring your Tableau visualizations comply with these standards can help your organization avoid legal issues and fines.



### Quick Resources

[Accessibility FAQ](https://community.tableau.com/s/question/0D54T00000C6nsjSAB/faq-accessibility?_ga=2.111315712.508374651.1711984913-481570784.1697558692&_gl=1*13u4gki*_ga*NDgxNTcwNzg0LjE2OTc1NTg2OTI.*_ga_8YLN0SNXVS*MTcxMTk4NDkxMi4xMzkuMS4xNzExOTg2Mzc5LjAuMC4w): links to product documentation, articles, blog posts, and other resources that are helpful for creating accessible content with Tableau. 
[Build Data Views for Accessibility](https://help.tableau.com/current/pro/desktop/en-us/accessibility_overview.htm): how to use Tableau to build data views that help you align to the Web Content Accessibility guidelines (WCAG 2.1 AA)
[Best Practices for Designing Accessible Views](https://help.tableau.com/current/pro/desktop/en-us/accessibility_best_practice.htm) 
[Author Views for Accessibility](https://help.tableau.com/current/pro/desktop/en-us/accessibility_create_view.htm)




# 📈 Your Mission

## Mission Overview: 

You’re a freelance analyst that has recently been hired by the San Diego Zoo to help them find insights and understand trends in their attendance, attraction, and revenue data. The views must also follow accessibility best practices to allow all users to see and understand the data. 

The workbook below is from a prior analyst. It’s connected to the correct data source but it does not follow accessibility best practices. You have been tasked with making the views in this workbook accessible along with creating some new views. 

* * *
Starter Dashboard Ideas

* floating objects 
* image in top left 
* viz in tooltips 
    

Exercise Ideas: 

* Dashboard Intro **EB**
    * Filter actions 
    * viz in tool tip 
    * floating info button with hover tooltip 
        
* Build Line Chart **JK**
    * viz colors 
    * less granular
    * adding shape with dual axis
    * removing background fill
    * text colors vs backgrounds
    * try web aim 
        * CHange light gray to dark red
* Build Legend Chart **JK**
* Build Attractions Chart **EB**
* Build Text Table **JK**
* Build Visitor Ratings Chart **EB**
* Date parameter **JK**
    * Create parameters
    * Create Calculation
* Build Dashboard 
    * focus order *complexity** advanced topic*
        * **resources**
    * Download button
    * Filters
        * add them into dashboard 
        * apply to all sheets
    * add padding / visual tips 
* Adding context 
    * captions
    * descriptive titles
    * descriptive filter/legend titles 
    * alt text 
    * have these to copy & paste 
* Add Color to headers 
    * webaim color selector 
* Screen Reader




## 🦜 Exercise 1 - Intro

Your first assignment is to redo the dashboard created by the former analyst. While they did a nice job following the San Diego Zoo color scheme, their dashboard lacks many accessibility features. 

Dashboard Arrangement 

Color Contrast 

Date Filter

Filter Actions 

Viz in Tooltip

Lack of Captions and Context 

Floating Object with Tooltip 


## 🦏 Exercise 2 -  Visit Duration by Attraction

### Steps:

* Start with the existing line chart.
* Remove Background
    * Right Click on the chart area → Format → Shading →Select None** if we start with the other work or start from scratch this could be different or walk through creating a line chart.
* Change the level of granularity
    * Add Attraction Type to Color - Replacing Attraction name 
    * Select Color on the marks card, and go to Edit Colors. and Select the
    * On the Color Palette List choose Color Blind and select Apply Palette
    * Close the window by hitting OK 
* Add additional indicators by using Shape
    * Bring another pill for AVG(Visit Duration) to the Rows Shelf
        * Pro tip Hold Ctrl then click and drag an existing pill to duplicate it.
    * From here we want to create a dual axis chart
        * Right click the second avg(visit duration) pill on the rows shelf and select dual axis
        * Right click the visit duration axis header on the right side and select Synchronize Axis
        * Right click the same header and unselect Show Header to hide this header
    * Now we need to add in our shapes
        * On the marks cards select the second line icon
        * Change the chart type to shape
        * Bring a second pill for Attraction Type to shape on the marks card.
        * Select shape to change the assigned shape palette. Choose filled, and select shapes you want to represent the attraction types
        * Use the size option on the marks card to slightly increase the size of the shapes.
    * Verify Graphical Color Contrast
        * With our new shapes and this new palette it should be easy to verify 
        * Open Webaim
        * Shrink the window to show both Tableau and the Web Browser
        * Select the color picker on foreground color. and pick the lighter gray color currently used
        * Verify the color contrast numbers do not meet wcag standards
        * Change the color selected to be a darker color, maybe the darker red on the right column of the color blind palette
        * Recheck for graphical attribute contrast
    * Add context to the most recent datapoints
        * On the shape chart bring another pill for avg(visit duration) to label.
        * Select Label to edit the label. select to show mark labels, and allow labels to overlap
        *  Under alignment for horizontal choose right and vertical choose middle
        * For marks to label choose most recent
        * Notice the labels are a little squished over the shapes
        * Select the ellipsis next to the text box to manually edit text
        * Add 2-4 spaces to the front of <AVG(Visit Duration)> this can be verified with using the arrow keys to move the cursor
        * Select Apply and see the labels move right! ever so slightly.
* Bonus Time:
    * With additional time Format other aspects of your sheet
        * Removing column and row header dividers is a typical change.
        * Possibly adding axis rulers and tick marks
    * Formatting Tooltips should always be done!
    * Format the mark labels to not show decimal points
        * Format → Pane → Numbers → Number (custom) → set decimal points to 0

## 🐢 Exercise 3 - Attraction Type Legend 

### Steps:

1. Drag **Attraction Type** to **Rows**
2. Drag **Attraction Type** to **Color** on the **Marks Card**
3. Change the **Mark Type** to **Shape**
4. Drag **Attraction Type** to **Shape**

[Image: Screenshot 2024-04-11 at 3.01.36 PM.png]
## 🐵 Exercise 4 -  Visit Counts by Attraction and Visitor Home

### Steps: 

1. Place **Attraction Type** on **Columns** and expand the hierarchy to so **Attraction Name** is also visible
2. Place **Home** on **Rows** 
3. Select **Fit Height** instead of Standard for the Fit

[Image: Screenshot 2024-04-10 at 3.18.07 PM.png]
1. Place ***Attraction Visits (Count)*** on **Size**
2. Place **Attraction Type** on **Color** 
3. Change the Marks Type to **Shape**, and put **Attraction Type** on **Shape**
4. Place ***Attraction Visits (Count)*** on **Size**
5. Place ***Attraction Visits (Count)*** ** on **Label** 
    1. Select **Label** on the **Marks Card** 
    2. Select **Min/Max** under Marks to Label
    3. Un-check **Label minimum value**, so only the maximum values are shown

[Image: Screenshot 2024-04-10 at 3.03.50 PM.png]

Once completed, your worksheet should look like this! 



## 🦩 Exercise 5 -  Visitor Ratings

### **Steps:** 

1. Place **Rating** on **Rows** and ***Visitor Demographics (Count)* **on **Columns**
2. Re-order the columns by dragging them, so they go from 5 to 1 
3. Right-click the **Count of Visitor Demographics axis** and un-check **Show Header**
4. Right-click **Rating** (make sure to select the text and not the axis), and select **Hide Field Labels for Rows** 
5. Drag ***Visitor Demographics (Count)* **onto **Label** on the Marks Card
    1. select the carat on the pill 
    2. select **Quick Table Calculation** > **Percent of Total** 


1. Click the carat again, and select **Format**
    1. under the **Default** Section at the top, select **Numbers**
    2. select **Percentage**
    3. reduce the decimal points to 1 


1. Place **Ratings** on **Color** and assign the **Color Blind Alt** Palette 


## 🦁 Exercise 6 -  Visitor Demographics

### Steps

1. Drag **Gender** to **Rows** 
2. Drag **Age Group** to **Columns** 
3. Place ***Visitor Demographics (Count)*** on **Text**



1. Right-click **Age Group** and select **Hide Field Labels for Rows** 
2. Right-click **Gender** and select **Hide Field Labels for Rows** 
3. Toggle to the **Analytics** tab in the top left of your screen


1. Drag **Totals** onto **Column Grand Totals** and **Row Grand Totals** 



1. Add **Age Group**, **Gender**, **Home**, and **Visitor** **Type** to the **Filter Panel**



1. Click the caret next to each pill in the filter panel, select **Apply to Worksheets > All Using this Data Source**. We will need these for the dashboard.  



## 🐼 Exercise 7 -  Date Parameter

### Steps:

Create a new date Parameter

    1. 
    2. Rename to Start Date and select Date as the data type. Set the current value to 10/1/2023
        1. 
1. Duplicate the parameter
    1. Right Click → Duplicate
        1. 
2. Right Click the copied version → select edit
3. Rename to End Date and Change the current value to 5/31/2024
4. Now with both parameters created we can build the calculated field to check our dates
    1. Create a Calculated Field
    2. 
    3. 
    4. Name it “In Date Range”
    5. Add this calculation [Visit Date] >= [Start Date] and [Visit Date] <= [End Date]
    6. 
    7. Bring **In Date Range** to the filters shelf and select when **True**
5. Now apply this filter to the necessary worksheets
    1. Right click the filter and apply to selected worksheets
        1. 
    2. Pro Tip before doing this I like to color code all the worksheet tabs first, that way the selection is more visual in the filter selection screen 
        1. 
        2. 




## 🐯 Exercise 8 -  Build Dashboard

### Steps:

Now that your sheets are all built out, your dashboard should look something like this: 
**Re-size Worksheets:** 


1. Select each worksheet and choose the Fit Size that’s best for the worksheet 


1. Recommended Sizes: 
    1. Visitor Ratings: Entire View
    2. Visit Count by Attraction and Visitor Home: Fit Height, then adjust width by 

## 🦍 Exercise 9 -  Add Colors

### Steps:

## 🐫 Exercise 10 -  Test with Screen Reader

### Steps

## 🦚 Bonus -  XML Challenge

### Steps: 




## Notes from Dry Run 

color contrast slides 

bold titles 



















