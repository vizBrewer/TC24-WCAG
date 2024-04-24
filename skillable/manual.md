Hello there!

Welcome to your lab environment.

To log into your VM, you will need to use the following credentials:

Username: +++**@lab.VirtualMachine(Win11-TC24).Username**+++

***Click green text to auto type text***

***helpful for parts of the training with a lot of typing***

Password: +++**@lab.VirtualMachine(Win11-TC24).Password**+++

Level: Intermediate
# Cutting the Curb - HOT Instructions

**Level:** Intermediate

This was presented during Tableau Conference 2024.1 and uses Tableau Desktop version 2023.4. Some topics might be outdated if you’re looking at this beyond 2024.1.


# 📖 Get Started

## 💥 About Today’s Session

* We will be exploring the various ways to master inclusive data visuals with WCAG principles, allowing you to learn to design universally accessible dashboards, and ensure your analytics are user-friendly and inclusive for all abilities.
* Each exercise is made up of individual steps. The steps are written to provide a bit of a challenge, but we’ve provided detailed answers under each step.



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


===

# 📈 Your Mission

## Mission Overview: 

You’re a freelance analyst that has recently been hired by the San Diego Zoo to help them find insights and understand trends in their attendance, attraction, and revenue data. The views must also follow accessibility best practices to allow all users to see and understand the data. 

Open the workbook on the VM Desktop TC Workbook STARTER.twbx

The workbook below is from a prior analyst. It’s connected to the correct data source but it does not follow accessibility best practices. You have been tasked with making the views in this workbook accessible along with creating some new views. 
^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/dashboard%20start.jpg)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/dashboard%20start.jpg)


* * *
===
## 🦜 Exercise 1 - Intro

Your first assignment is to redo the dashboard created by the former analyst. While they did a nice job following the San Diego Zoo color scheme, their dashboard lacks many accessibility features. 

 Take notice of the following aspects of the dashboard that affect its accessibility: 
>[+]First take a look at the dashboard in Tableau Desktop and then expand this to reveal the problems
>* Dashboard Arrangement 
>* Color Contrast 
>* Date Filter
>* Filter Actions 
>* Viz in Tooltip
>* Lack of Captions and Context 
>* Floating Object with Tooltip 


===
## 🦏 Exercise 2 -  Visit Duration by Attraction

Line charts are a staple data visualization, and with a few easy steps we can make them more perceivable for our end users. Our original line chart relied too much on color alone, lets take a step back and see what we can improve.

### Steps:
1. Bring **Visit Date** to **Columns**
    1. Adjust The date level to Month - Year

    ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_1.png)

2. Bring **Visit Duration** to the **Rows** shelf
3. Add **Attraction Type** to Color - we have chosen to go up a level in our attraction hierarchy, but will still include the more granular data about **Attraction Name** in another chart.
    1. Select **Color** on the marks card 
    2. Open **Edit Colors.**
    3. Choose the **Color Blind** color palette and select **Assign Palette**
        1. Notice how the Light Gray color is automatically assigned. Because we have a white background, we may want to avoid lighter colors to maintain contrast on our views.
        2. Select the **Ride** data element, and then select a **darker color** so your line chart looks like the one below:

        ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_2.png)

        ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_3.png)

4. Create a dual axis chart 
    1. Bring another pill for **Visit Duration** to **Rows** 
        1. *Pro tip Hold Ctrl then click and drag an existing pill to duplicate it.*
    2. Right click the second **AVG(Visit Duration)** and select **Dual Axis
        **
    3. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_4.png)
    4. Right click the **Visit Duration axis header** on the **right side** and select **Synchronize Axis**
    5. Right click the same header and unselect **Show Header** to hide this header
    6. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_5.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_5.png)
5. Add Shapes to the chart 
    1. Select the second **AVG(Visit Duration) (2)** on the **Marks Card**
    2. Change the chart type to **Shape**
    3. Drag **Attraction Type** to **Shape** 
    4. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_6.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_6.png)
    5. Select **Shape** to change the assigned shape palette. 
    6. Choose **filled**, and select shapes you want to represent the attraction types
    7. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_7.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_7.png)
    8. Select **Size** on the marks card and slightly **increase** the size of the shapes.
        1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_8.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_8.png)
6. Add context to the most recent datapoints
    1. On the **AVG(Visit Duration) (2)** Marks Card (same one with the shapes), drag **Visit Duration** to label.
    2. Select **Label** and make the following selections: 
        1. Alignment: **Middle Right**
            1. Horizontal: **Right**
            2. Vertical: **Middle**
        2. Marks to Label: **Most Recent**
        3. Options: **Allow labels to overlap**
    3. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_9.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_9.png)
    4. Select the ellipsis **“...”** next to the text box to manually edit the label text
    5. Add 2 spaces to the front of **<AVG(Visit Duration)>** this can be verified with using the arrow keys to move the cursor
    6. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_10.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_10.png)
    7. Select **Apply** and see the labels move right
        1.  ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_11.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_11.png)

Looks Great!
##Bonus Time: Extra Formatting

1. Removing column and row header dividers 
    1. **Right click** anywhere in your worksheet and select **Format** top open up the format panel on the left
    2. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_12.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_12.png)
2. Formatting Tooltips
    1. Select **Tooltip** on the **All** marks card 
    2. add “min” after AVG(Visit Duration) 
    3. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_13.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_13.png)
3. Format the mark labels to not show decimal points
    1. Right Click the Label AVG(Visit Duration) → Format → Pane → Numbers → Number (custom) → set decimal points to 0
    2. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_14.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise2_14.png)

===
## 🐢 Exercise 3 - Attraction Type Legend 

Tableau will Autogenerate legends for color and shape that can be used independently.  However sometimes you might have limited real estate on a dashboard so bringing the color and shapes to a single view can save space!

### Steps:

1. Drag **Attraction Type** to **Rows**
2. Drag **Attraction Type** to **Color** on the **Marks Card**
3. Change the **Mark Type** to **Shape**
4. Drag **Attraction Type** to **Shape**
5. Drag **Legend Details** to **Tooltip**
6. Select **Tooltip** in the **Marks Card** to format:
    1. Clear the current tool tip, and paste the following
    2.  ```<Attraction Type> is <Legend Description>```
        
        *place your cursor in the text field and hit the T button to auto type!*

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise3_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise3_1.png)
===
## 🐵 Exercise 4 -  Visit Counts by Attraction and Visitor Home

We’ll bring the more specific view of Attraction name into a Shape chart, which will be a more Understandable way for our users to engage in this level of detail. Instead of trying to put each Attraction Name directly on the line chart.

### Steps: 

1. Place **Attraction Type** on **Columns** and expand the hierarchy to so **Attraction Name** is also visible
2. Place **Home** on **Rows** 
3. Select **Fit Height** instead of Standard for the Fit
^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise4_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise4_1.png)

4. Place ***Attraction Visits (Count)*** on **Size**
5. Place **Attraction Type** on **Color** 
6. Change the Marks Type to **Shape**, and put **Attraction Type** on **Shape**
7. Place ***Attraction Visits (Count)*** on **Size**
8. Place ***Attraction Visits (Count)***  on **Label** 
    1. Select **Label** on the **Marks Card** 
    2. Change the **Alignments** to **Top Center**
        1. Horizontal: Center 
        2. Vertical: Top
        ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise4_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise4_2.png)



Once completed, your worksheet should look like this! 

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise4_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise4_3.png)


===
## 🦩 Exercise 5 -  Visitor Ratings

Previously this was only available to our end users in a viz in tooltip shown as a donut chart.  There’s a better way to break this important metric down. A simple, clear, and concise Bar Chart. Lets make it!

### **Steps:** 

1. Place **Rating** on **Rows** and ***Visitor Demographics (Count)*** on **Columns**
2. Re-order the columns by dragging them, so they go from 5 to 1 
3. Right-click the **Count of Visitor Demographics axis** and un-check **Show Header**
4. Right-click **Rating** (make sure to select the text and not the axis), and select **Hide Field Labels for Rows** 
5. Drag ***Visitor Demographics (Count)*** onto **Label** on the Marks Card
    1. select the carat on the pill 
    2. select **Quick Table Calculation** > **Percent of Total** 
^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise5_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise5_1.png)

6. Click the carat again, and select **Format**
    1. under the **Default** Section at the top, select **Numbers**
    2. select **Percentage**
    3. reduce the decimal points to 1 
^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise5_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise5_2.png)

>[!knowledge] Simple, easy to undertand bar charts are a staple of data visualizaiton! Great Job!
===
## 🦁 Exercise 6 -  Visitor Demographics

At the end of the day a lot of users like to see their data in a table, and at the end of this we can share a fun new feature!

### Steps

1. Drag **Gender** to **Rows** 
2. Drag **Age Group** to **Columns** 
3. Place ***Visitor Demographics (Count)*** on **Text**

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_1.png)


4. Right-click **Age Group** and select **Hide Field Labels for Rows** 
5. Right-click **Gender** and select **Hide Field Labels for Rows** 
6. Toggle to the **Analytics** tab in the top left of your screen

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_2.png)


7. Drag **Totals** onto **Column Grand Totals** and **Row Grand Totals** 

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_3.png)


8. Add **Age Group**, **Gender**, **Home**, and **Visitor** **Type** to the **Filter Panel**

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_4.png)

9. Click the caret next to each pill in the filter panel, select **Apply to Worksheets -> All Using this Data Source**. We will need these for the dashboard.  

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_5.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise6_5.png)



===
## 🐼 Exercise 7 -  Date Parameter

Functional Accessibility for Date filtering can be done with a Relative Date Filter, or by bringing in Start and End Date parameters.  We like this approach as it allows for accessible and detailed control over dates on the dashboard.

### Steps:

1. Create a new Parameter
    1. Select the arrow in the top left > Create Parameter 

    ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_1.png)


2. Enter the following details: 
    1. Name: Start Date 
    2. Data type: Date 
    3. Current value: 10/1/2023
    4. Display format: 10/1/2023
    5. Select **OK** and the parameter should appear in the bottom left corner

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_2.png)


3. Duplicate the parameter
    1. Right Click **Start Date** > **Duplicate**
    2. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_3.png)
4. Create Close Date Parameter
    1. Right click **Start Date (copy)** > **Edit**
5. Enter the following details: 
    1. Name: **End Date**
    2. Current value: **5/31/2024
        **
    3. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_4.png)
6. Create a calculated field to check the dates
    1. Select the arrow in the top left > Create Calculated Field 
    2. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_5.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_5.png)
    3. Name: **In Date Range**
    4. Add this calculation: +++[Visit Date] >= [Start Date] and [Visit Date] <= [End Date]+++
    5. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_6.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_6.png)
7. Bring **In Date Range** to the filters shelf and select **True
    **

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_7.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_7.png)

8. Apply this filter to the worksheets using this datasource

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_8.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise7_8.png)

Now we're ready to format the dashboard!

>[!hint] You've completed the first section of exercises! Take a break, forge ahead, make another chart, or help a neighbor.
===
## 🐯 Exercise 8 -  Build Dashboard

Now that your sheets are all built out, your dashboard should look something like this: 

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_1.png)

### **Re-size Worksheets:** 

1. Select each worksheet and choose the Fit Size that’s best for the worksheet 

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_2.png)

1. Recommended Sizes: 
    1. Visitor Ratings: Entire View
    2. Visit Count by Attraction and Visitor Home: Fit Height, then adjust width manually 
    3. Visitor Demographic Details: Entire View 



### Add Filters and Parameters

1. Add Filters to Dashboard 
    1. Select the **down arrow** on the **Visitor Demographic Details Worksheet**
    2. Add the following Dimensions as filters: **Age Group, Gender, Home, Visitor Type**

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_3.png)
1. Following the same steps as above, add the following Parameters 
    1. Hover over Parameters instead of Filters 
    2. Add **Start Date** and **End Date** so they appear in the vertical container with the filters 
        
2. Format Filters 
    1. Change the filter types to: **Multiple Values (dropdown)** 
    ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_4.png)



1. Move Filters 
    1. Select each filter box and drag and drop it between the the **place holder** and the **Attraction Legend sheet**
    2. Stack them on top of each other and adjust the sizing as needed

    ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_5.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_5.png)


1. Move Parameters 
    1. Add the parameters so they are to the right of the filters 

    ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_6.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_6.png)


1. Format Parameters 
    1. Select **Start Date parameter**
    2. Select the **Layout tab** in the top left corner 
    3. **Unlock** the **Outer Padding** 
    4. Change the **Top** to **35**
    5. Do the same for the End Date parameter so they are both centered 

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_7.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_7.png)
### 

### Add CSV Download 

1. Go to **Objects** in the bottom left corner and find the **Download** button 
2. Drag and drop it between the place holder and logo 

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_8.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_8.png)
^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_9.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_9.png)

1. Format the button 
    1. Select the button and click on the Down Arrow 
    2. Select **Edit Button**

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_10.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_10.png)

1. Make the following configurations: 
    1. Export to: **Crosstab**
    2. Button Style: **Image**
2. For the image, navigate to **Desktop > Dashboard Files > csv-outline.png > Open**

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_11.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise8_11.png)

>[+alert] ***Note:*** The icon will look grayed out in your dashboard. That will clear once published
===

## 🦍 Exercise 9 -  Fix Header Colors

The color of the headers in the dashboard template are the same as the San Diego Zoo logo. While it’s a great visual design technique to keep colors consistent throughout your dashboard, you also want to make sure that they are following accessibility best practices by meeting or surpassing the WCAG Contrast ratios. 

WebAIM (https://webaim.org/resources/contrastchecker/) has a contrast checker that we can use to see if our dashboard’s colors pass WCAG guidelines. 

**Test Colors:**

1. Open <[WebAIM](https://webaim.org/resources/contrastchecker/) alongside your dashboard (open externally or in the VM from Edge!IMAGE[3hemley6.png](instructions258432/3hemley6.png){20})

2. Use the color Picker to grab the header color from the dashboard. (The background is white so we don’t need to worry about that one)

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_1.png)

1. Unfortunately, this color did not pass. Now we’ll use this tool to create a new header color. 

**Create New Color:**

1. In the **Foreground** box, slide the **Luminance scale** to the left until the **Graphical Objects and User Interface Components** results in a **Pass**. 
2. We’d like to keep the color as close to the original as possible, so the Hex Value should be something close to: #**65A239**

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_2.png)
**Add Color to Dashboard:** 

1. At the very top of your screen, navigate to **Dashboard** **>** **Format
    **

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_3.png)

1. Under **Worksheet Titles**, open up **Shading** then **More Colors**, which will open up the Color Editor.  

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_4.png)

1. Enter **65A239** or whichever hex code you retrieved into the Hex Color # box and select **OK** 
2. Let’s also **Bold** the font of the worksheet titles as well 
3. Select **Font** under **Worksheet Titles** and then **Bold
    **

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_5.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise9_5.png)
===
## 🐨 Exercise 10 -  Create a Color Blind Palette

We have used Tableau’s colorblind palette to differentiate attraction types, so now let’s create a new colorblind palette that we can use to differentiate the bars in the Visitor Ratings chart. 

We are going to use the <[ColorBrewer](https://colorbrewer2.org/) website to create this palette.  


1. Open up ColorBrewer and enter criteria for color palette
    1. Number of data classes: **8** 
    2. Nature of your data: **diverging**
    3. Only show: **colorblind safe**

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_1.png)

1. Choose whichever color scheme you’d like from the generated options 
2. Open up the **File Explorer** at the bottom of your VM and open **My Tableau Repository > Preferences.tps**

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_2.png)

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_3.png)

1. Copy and Paste the color palette codes
    1. paste between:  
        ```-nocopy
        <workbook> 
        
        
        </workbook>
        ```


**Green/Brown Color Palette:** 
```
<preferences>
<color-palette name="Color Blind Alt" type="regular">
<color>#8c510a</color>
<color>#bf812d</color>
<color>#dfc27d</color>
<color>#f6e8c3</color>
<color>#ffffff</color>
<color>#80cdc1</color>
<color>#35978f</color>
<color>#01665e</color>
</color-palette>
</preferences>
```
**Template for other color Palettes:** 
*copy and paste the hex values* 
```
<preferences>
<color-palette name="Color Blind Alt" type="regular">
<color>**hex**</color>
<color>**hex**</color>
<color>**hex**</color>
<color>**hex**</color>
<color>**hex**</color>
<color>**hex**</color>
<color>**hex**</color>
<color>**hex**</color>
</color-palette>
</preferences>
```

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_4.png)

1. Save Preference.tps and **File -> Save** and close the Notepad
2. **Save** your workbook file and **close** Tableau
3. **Re-open** your workbook and navigate to the **Visitor Ratings** worksheet
4. Place **Ratings** on **Color** and assign the **Color Blind Alt** Palette 

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_5.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise10_5.png)

>[!hint][Additional Color Palette customization options](https://help.tableau.com/current/pro/desktop/en-us/formatting_create_custom_colors.htm)
===
## 🐊 Exercise 11 - Add Context

### Dashboard Title and Overview

Your Dashboard Title is most often the first element of the dashboard that your users see, and it should give your them a succinct understanding of it’s overall purpose. 

Dashboard Overviews are a great way to provide a bit more detail around how your users are supposed to navigate the dashboard, context into where the data is coming from, or any insights you specifically want to call out. 

Reminder - sometimes less is more! Don’t add additional text if you don’t need it. 

>[!hint]All of these context customizations can be done from the Dashboard View

Feel free to use these titles and subtitles, or come up with your own: 

1. **Double-click** on the **Dashboard Title** object to open up the text box. 
2. Dashboard Title: 
    1. Zoo Attraction Metrics and Visitor Breakdowns 
    2. Size: 18 
    3. Bold 
3. Dashboard Subtitle: 
    1. An overview of important zoo visitor metrics from June 2023 through May 2024.  
    2. Size: 11 

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_1.png)

### Captions 

Captions are an excellent way to convey additional information and context to your audience for specific sheets on your dashboard. It is important to try and keep captions as non technical as possible. Don’t introduce jargon that your audience may not understand.

1. Select the first sheet and **Worksheet** → **Show Caption**
    1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_2.png)
2. Right click on the caption area and click **Edit caption**
    1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_3.png)
3. Insert the caption text 
    1. text:
        ```-nocolor-wrap
        Line chart from <Parameters.Start Date> to <Parameters.End Date>. Showing monthly average visit duration classified by attraction type. 
        Attraction types are represented by both color and shape.
        ```

        1. Inserting Parameters into caption text helps to make it dynamic. Inserted Fields are denoted with < and > on either side.
        2. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_4.png)
        3. In this example as the date parameters change the captions are also adjusted
    2. You can follow the same process for the other 3 sheets
        1. Visitor Ratings
            1. All ASCII Characters can me used in Tableau text fields so we can add  ■ ‘s to build a mini - legend directly in our caption
                1. A good best practice is to have legends closely tied to their corresponding chart(s) so this can certainly help provide good context. 

            2.  
            ```-nocolor-wrap
            Bar chart of visitor ratings on a scale of 1(Bad)-5 (Good).  ■ 1 | ■ 2 | ■ 3 | ■ 4 | ■ 5
            ``` 
                We can then individually color the ascii squares using the same colors from our new palette 

        2. Visitor Counts by Attraction and Visitor Home
            1.  
            ```-nocolor-wrap
            Shape Chart showing a count of visitors broken down by attraction name and visitor home. Shape size indicates count. Color, shape and column grouping is by attraction type
            ``` 

        3. Visitor Demographic Details
            1. 
            ```-nocolor-wrap
            Text table with a breakdown of all individual Visitor Age and Gender combinations
            
            ```

### Alt Text 

Alt Text can help convey specific information about a chart in a more accessible way.  So instead of just description’s similar to a caption you can add additional insightful elements. Alt text is read out by screen readers as a user navigates your dashboard.

Alt text can be added to images, buttons and now [sheets](https://help.tableau.com/current/pro/desktop/en-us/accessibility_create_view.htm#edit-alt-text-to-make-it-more-descriptive-tableau-cloud-and-tableau-desktop)\!

[Tips for writing Alt Text](https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81)

^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_5.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_5.png)

1. From the Dashboard select a Worksheet and select the accessibility menu
    1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_6.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_6.png)
2. The Accessibility Menu will allow you to edit the auto generated alt text
    1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_7.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise11_7.png)
    2. Add in:
    ```-nocolor-wrap
    Line Chart of Average Visit Duration Trend in Minutes, by Attraction Type. Showing a dip in Average Educational visit duration in February of 2024

    ```
3. Add alt text for the remaining sheets
    1. Visitor Ratings
        1. 
        ```-nocolor-wrap
        Bar chart Showing percentages of Visitor Demographics Rating. More than 70% of visitors rate their experience a 4 or 5 out of 5
        ```

    2. Visitor Counts by Attraction and Visitor Home
        1. 
        ```-nocolor-wrap
        Shape chart of Attraction Name by Visitor Home. Majority of Visitors visit Exhibits, with Savannah View being the most visited

        ```

    3. Visitor Demographic Details
        1. 
        ```-nocolor-wrap
        Text Table chart of Gender and Age Group. Female Adults account for the largest portion of Visitors with 93

        ```




===
## 🐫 Exercise 12 -  Test Keyboard Navigation

Dashboard items can be navigated by commonly supported WAI-ARIA standards

| WHAT TO DO                                        | KEYSTROKES        |
|---------------------------------------------------|-------------------|
| Move focus to next navigation component           | Tab               |
| Move focus to previous navigation component       | Shift+Tab         |
| Button activation                                 | Spacebar or Enter |

[Keyboard Shortcuts](https://help.tableau.com/current/pro/desktop/en-us/access_keyboard_navigation.htm) for accessibility navigation

Screen Readers will also read content on a Tableau dashboard and the alt text that has been set up.  Some common screen reader software you might see:

* Windows - 
    * JAWS - Premium, widely used
    * NVDA - Open Source and Free
* Mac - VoiceOver - built in reader

### Steps

Practice Keyboard Navigation

* Test URL: ^https://vizbrewer.github.io/TC24-WCAG/
* Start with the original dashboard
    * Use the Tab key until you reach the first chart on Age Groups
        * Take note on how the date slider filter was skipped. We’ll be able to interact with our date parameters in the finished version
    * Hit Enter - Followed by Shift+Enter to bring up the view data pane
        * This can be navigated easily by keyboard
        ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise12_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise12_1.png)
        * You can then close the current window and return to the dashboard with ALT+F4
* Change the view to the After View
    * 
    * This is our completed workbook.
    * Tab Navigate to the **Start Date** parameter
        * Type a new **Start Date** and hit Enter, lets say we only want this year “01/01/2024”
        * ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise12_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise12_2.png)
    * Now we can navigate through the rest of the dashboard
        * Notice how the focus order runs top to bottom - left to right We can override this, to hit all the filters first before moving on. Which is a little more advanced and a bonus topic at the end of this exercise.
        * ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise12_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise12_3.png)
        * Stop Navigation on Visitor Demographic Details
* Navigating a Text Table 
    * **NEW:** Text tables in dashboards are now [keyboard navigable](https://help.tableau.com/current/online/en-us/viz_navigation.htm).
    * With focus on Visitor Demographic Details Hit Enter Twice to go down into the mark level
        * Text Marks are now directly navigable with the keyboard and Screen Readers will speak the mark details as well as the headers
        * ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise12_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise12_4.png)

#That’s All! you’ve completed your Hands on Training for building accessible Dashboards!



===
## 🦚 Bonus -  XML Challenge - Focus Order
>[+alert] ***Note:*** This is a more advanced topic but still very important to understand


Focus order in Tableau is going to be defaulted to left to right, top to bottom.
This can be overridden and adjusted manually.  TWB files are just XML files in disguise.  Adjusting the **id** parameters in the **zone** tags and adjusting a focus order flag allows us to take more granular control of the focus order. Finished example Here: ^[Finalized Focus Order](https://vizbrewer.github.io/TC24-WCAG/focused)

### Steps: 

1. Like anything with building dashboards its best to plan things out first!
    1. Building a mapping of the different items on the dashboard and numbering them in the order they should be in for navigation.
        1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_1.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_1.png)
    2. These are the zones that will be used to adjust zone id tags. Numbering them in larger numbers makes them more visible later on and during editing.
2. Open the twb file “TC Workbook FINISHED.twb” located in the Documents Folder into a text editor.
    1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_2.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_2.png)
    2. Sublime Text is a great one and is preloaded on the VM
3. Search for the title of the dashboard you are looking to change, and find the <dashboard> tag
    1. Ctrl+F → Finished Dashboard → Find next until you reach the dashboard tag
    2. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_3.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_3.png)
    3. Adjust the fcp.AccessibleZoneTabOrder parameter to false. This is set between the quotes and not in the parameter declaration
    4. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_4.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_4.png)
4. Now Find the zones tag in the dashboard hierarchy
    1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_5.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_5.png)
    2. We can see the zone with the type-v2=‘text’ is our title
        1. We can now update that zone id = ‘3’ to our designated id for that zone in our plan of 100
    3. Next we’ll see the zone for the zoo icon, this is a type-v2=‘bitmap’ bitmaps are just another word for image
        1. We can update this zone id to 1000.
    4. Next we will see zone tags that have no types.  A zone tag without a type is a sheet 
        1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_6.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_6.png)
    5. We Can go through and update the remaining zones the same way. Be on the lookout for additional zone types
        1. Export Button
            1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_7.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_7.png)
        2. Parameters
            1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_8.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_8.png)
        3. Filters
            1. ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_9.png)](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_9.png)
5. Once all the zone ids are updated according to our planned out layout you can save the document and close the text editor
6. Now the twb file can be opened in Tableau Desktop and Published.
7. Publishing to a Server/Cloud is out of the scope for this training session, but we have a working demonstration of the focus order behavior changes here: ^[Finalized Focus Order](https://vizbrewer.github.io/TC24-WCAG/focused)

Video:  ^[![Click Me](https://raw.githubusercontent.com/vizBrewer/TC24-WCAG/main/images/exercise13_1.png)](https://tableau.egnyte.com/dl/tRhRtsLgdI)
















